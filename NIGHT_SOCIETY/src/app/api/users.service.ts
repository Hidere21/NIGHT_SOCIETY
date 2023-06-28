import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jwtDecode  from "jwt-decode"
import {User} from "../../../../BACK-END/src/interfaces/user.interface"
import { environment } from 'src/environments/environment.development';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  urlApi= `${environment.API_URI}/user`
  createToUser?: User
  userToCreate: UserModel = new UserModel()
  allUsers: User[] = []
  auth: any = {
    email: "",
    password: ""
  }

  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.http.get(`${this.urlApi}/getUsers`)

  }
   deleteUser(_id: string){
    return this.http.delete(`${this.urlApi}/delete/${_id}`)
   }
   updateUser(data: User){
    let dataToUpdate = {
      _id: data._id,
    }
    return this.http.put(`${this.urlApi}/update`, dataToUpdate)
   }

   login(data: any){
    return this.http.post(`${this.urlApi}/login`,data)
   }
   isLoggedIn(){
    return localStorage.getItem('token') ? true : false
   }

   decodeToken(): any{
    const token = localStorage.getItem('token')
    let decoded
    try {
      decoded = jwtDecode(token ? token: "Error")
    } catch (error) {
      decoded = false

    }
    return decoded


  }
  isAdmin(){
    let obj = this.decodeToken()
    return obj && obj.role === 'admin' ? true: false
  }


  createUser(data: UserModel){
    return this.http.post(`${this.urlApi}/create`, data)
  }

}
