import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  use: any = {};
  file: any;

  constructor( public user: UserService){

  }

  handleFileInput(event: any) {
    this.file = event.target.files[0];
  }
  cleanForm(){
    this.user.userToCreate = new User()
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
