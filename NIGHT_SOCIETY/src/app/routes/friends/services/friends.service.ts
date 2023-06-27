import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { environment } from 'src/environments/environment.development';
import { FriendsData } from '../interfaces/friends-data.interface';

@Injectable({
  providedIn: 'root',
})
export class FriendsService {
  // Utilizar el HTTPCLIENT sin un constructor
  private http = inject(HttpClient);

  urlAPI = `${environment.API_URI}/user`;
  getUsers: User[] = [];
  myFriends: User[] = [];

  getAllUser(): Observable<User[]> {
    return this.http.get<User[]>(`${this.urlAPI}/getUsers`);
  }

  getFriends(id: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.urlAPI}/getFriends/${id}`);
  }

  getPosibleFriends(id: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.urlAPI}/posibleFriends/${id}`);
  }

  editFriends({ id, data }: { id: string; data: FriendsData }): Observable<User> {
    return this.http.post<User>(`${this.urlAPI}/editFriends/${id}`, data);
  }
}
