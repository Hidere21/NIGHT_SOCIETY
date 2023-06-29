import { Component } from '@angular/core';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  userInfo: any;

  constructor (private PerfilService: PerfilService){

  }

  ngOnInit() {
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

}
