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


  constructor( public user: UserService){
    
  }


  // cleanForm(){
  //   this.user.userToCreate = new User()
  // }



  // createUser(form: NgForm){

  //   let data = form.value

  //   this.user.createUser(data).subscribe((data)=>{
  //     console.log({data})
  //     alert("Usuario creado")
  //     this.cleanForm()
  //   })
  // }

  

  onSubmit(form: NgForm) {
    if ( form.invalid || !this.selectedImage) {
      return;
    }
  
    const user = form.value;
    const imageFile = this.selectedImage;
  
    this.user.createUser(user, imageFile).subscribe(
      (response) => {
        console.log('User created successfully');
        // Handle any additional actions or notifications
      },
      (error) => {
        console.error('Error creating user', error);
        // Handle error cases and display appropriate messages to the user
      }
    );
  }
   
  selectedImage: File | undefined;
  
  // onFileSelected(files: FileList) {
  //   if (files.length > 0) {
  //     this.selectedImage = files[0];
  //   }
  // }

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const files = inputElement.files;
  
    if (files && files.length > 0) {
      this.selectedImage = files[0];
      // Resto del código para manejar los archivos seleccionados
    }
  }
}
