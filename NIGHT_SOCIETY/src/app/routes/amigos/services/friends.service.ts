import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { User } from '../interfaces/user.interface';
// import {jwtDecode} from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  urlAPI = `${environment.API_URI}/user`;
  getUsers: User[] = [];
  myFriends: User[] = [];

  constructor(private http: HttpClient) { }

  getAllUser() {
    return this.http.get(`${this.urlAPI}/getUsers`);
  }

  getFriends(id: string) {
    return this.http.get(`${this.urlAPI}/getFriends/${id}`);
  }

  getPosibleFriends(id: string) {
    return this.http.get(`${this.urlAPI}/posibleFriends/${id}`);
  }

  // createUser(user: User) {
  //   return this.http.post(`${this.urlAPI}/create`, user);
  // }

  editFriends(id: string, data: any) {
    return this.http.post(`${this.urlAPI}/editFriends/${id}`, data);
  }

}
