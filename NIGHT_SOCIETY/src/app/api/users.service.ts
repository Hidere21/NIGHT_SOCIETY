import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jwtDecode  from "jwt-decode"
import {User} from "../../../../BACK-END/src/interfaces/user.interface"
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  urlApi= `${environment.API_URI}/user`
  createToUser?: User
  allUsers: User[] = []
  auth: any = {
    username: "",
    password: ""
  }

  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.http.get(`${this.urlApi}/getAll`)
  }
   createUser(data: User){
    return this.http.post(`${this.urlApi}/create`,data)

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


}
