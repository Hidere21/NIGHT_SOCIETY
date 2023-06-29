import { Component, OnInit } from '@angular/core';
 import { NgForm } from '@angular/forms';
 import { Router } from '@angular/router';
 import {UsersService} from "../../api/users.service"
 import { UserModel } from 'src/app/models/user.model';
 import { PerfilService } from 'src/app/services/perfil.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  
  userInfo: any;

  constructor(private PerfilService: PerfilService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token'); // Obtener el token almacenado en el almacenamiento local
    if (token) {
      this.PerfilService.getUserInfo(token).subscribe(
        (response) => {
          this.userInfo = response;
        },
        (error) => {
          console.log('Error al obtener la información del usuario:', error);
        }
      );
    }
  }

  // getuserInfo( id: string){
  //   this.user.getuserInfo(id).subscribe((data)=>{
  //     console.log(data)
  //   })
  // }
  // ngOnInit(){
  //   this.getuserInfo
  // }
}
