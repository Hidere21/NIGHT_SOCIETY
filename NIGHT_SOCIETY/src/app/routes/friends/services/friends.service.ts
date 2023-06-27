import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from '../interfaces/user.interface';
import jwtDecode from 'jwt-decode';
import { environment } from 'src/environments/environment.development';
import { FriendsData } from '../interfaces/data.interface';

@Injectable({
  providedIn: 'root',
})
export class FriendsService {
  private http = inject(HttpClient);

  urlAPI = `${environment.API_URI}/user`;
  getUsers: User[] = [];
  myFriends: User[] = [];

  // Obtener todos los usuarios
  getAllUser() {
    return this.http.get<User[]>(`${this.urlAPI}/getUsers`);
  }

  getFriends(id: string) {
    return this.http.get<User[]>(`${this.urlAPI}/getFriends/${id}`);
  }

  getPosibleFriends(id: string) {
    return this.http.get<User>(`${this.urlAPI}/posibleFriends/${id}`);
  }

  editFriends(id: string, data: FriendsData) {
    return this.http.post(`${this.urlAPI}/editFriends/${id}`, data);
  }
}
