import { Component } from '@angular/core';
// import { UserService } from 'src/app/services/user.service';
import { UsersService} from 'src/app/api/users.service';

import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  constructor( public user: UsersService){
    
  }


   cleanForm(){
     this.user.userToCreate = new UserModel()
   }



   createUser(form: NgForm){

     let data = form.value

     this.user.createUser(data).subscribe((data)=>{
       console.log({data})
       alert("Usuario creado")
       this.cleanForm()
     })
   }
}
