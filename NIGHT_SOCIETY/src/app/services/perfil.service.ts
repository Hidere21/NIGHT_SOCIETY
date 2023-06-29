 import { Injectable } from '@angular/core';
 import { HttpClient, HttpHeaders } from '@angular/common/http';
 import { environment } from 'src/environments/environment.development';
 import { UserModel } from '../models/user.model';
  import jwtDecode from 'jwt-decode';
  import { Observable } from 'rxjs';

 @Injectable({
   providedIn: 'root'
 })
 export class PerfilService {
   urlAPI = `${environment.API_URI}/user`;
   getUsers: UserModel[] = [];
   myFriends: UserModel[] = [];

   constructor(private http: HttpClient) { }

   getUserInfo(token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.get<any>(`${this.urlAPI}/getInforUser`, { headers });
  }

 }
