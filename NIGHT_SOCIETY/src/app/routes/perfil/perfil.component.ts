import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {UsersService} from "../../api/users.service"
import { User } from 'src/app/models/user.model';
import { PerfilService } from 'src/app/services/perfil.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  



  constructor(public user: PerfilService){

  }

  getuserInfo( id: string){
    this.user.getuserInfo(id).subscribe((data)=>{
      console.log(data)
    })
  }
  ngOnInit(){
    this.getuserInfo
  }
}
