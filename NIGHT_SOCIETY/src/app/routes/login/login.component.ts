import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {UsersService} from "../../api/users.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent {
  constructor(public user: UsersService, public router: Router) {}

  login(form: NgForm) {
    let data = form.value;

    if (!data.password || !data.username)
      return alert('debes llenar todos los campos');

    this.user.login(data).subscribe({
      next: (data: any) => {
        localStorage.setItem('token', data.token);
        console.log(this.router.navigate(['/home']));
      },
      error: (err: any) => {
        alert("Error al iniciar sesión");
      }
    });
  }
}
