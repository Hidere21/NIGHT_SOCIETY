import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlApi = `${environment.API_URI}/user`
  userToCreate: User = new User()
  allUser: User[] = []
  auth: any = {
    username: '',
    password: ''
  }


  constructor(private http: HttpClient) { 

  }

  //metodos

  createUser(data: User){
    return this.http.post(`${this.urlApi}/create`, data)
  }
}
