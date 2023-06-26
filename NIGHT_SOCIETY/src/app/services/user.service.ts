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

  // createUser(data: User){
  //   return this.http.post(`${this.urlApi}/create`, data)
  // }

  createUser(user: any, image: File) {
    const formData = new FormData();
    formData.append('image', image); // Append the image file to the form data
    formData.append('user', JSON.stringify(user)); // Append the user data as a JSON string
  
    const url = 'http://localhost:3000/API/create'; // Replace with your actual backend API endpoint
  
    return this.http.post(url, formData);
  }
}
