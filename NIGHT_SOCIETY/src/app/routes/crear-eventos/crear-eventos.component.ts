import { Component, OnInit, ViewChild  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventsService } from 'src/app/services/events.service';
import { Event } from 'src/app/models/eventN.model';
import { HttpClient } from '@angular/common/http';


// interface HtmlInputEvent extends Event {
//   target: HTMLInputElement & EventTarget;
// }

@Component({
  selector: 'app-crear-eventos',
  templateUrl: './crear-eventos.component.html',
  styleUrls: ['./crear-eventos.component.css']
})
export class CrearEventosComponent implements OnInit {

  @ViewChild('eventForm', { static: true })
  eventForm!: NgForm;

  selectedImage: File[] = []
  selectedImages: any;
  http: any;

  constructor(public eventService: EventsService){ 
    this.selectedImage = [];
   }

  ngOnInit(){
    this.getAllEvent()
    
  }

  cleanForm(){
    this.eventService.eventToCreate = new Event()
  }

  // metodo
  // ...

// handleImageChange(event: any) {
//   // Obtener las imágenes seleccionadas del evento
//   const files = event.target.files;

//   // Limpiar la lista de imágenes seleccionadas
//   this.selectedImages = [];

//   // Mostrar una vista previa de cada imagen seleccionada
//   for (let i = 0; i < files.length; i++) {
//     const reader = new FileReader();

//     // Leer el archivo de imagen como una URL
//     reader.readAsDataURL(files[i]);

//     // Callback para cuando se haya terminado de leer el archivo
//     reader.onload = () => {
//       // Agregar la URL de la imagen a la lista de imágenes seleccionadas
//       this.selectedImages.push(reader.result);
//     };
//   }
//   this.saveImages();
// }

// saveImages() {
//   // Verificar si hay imágenes seleccionadas
//   if (this.selectedImages.length > 0) {
//     // Aquí puedes agregar la lógica para guardar las imágenes antes de crear el evento

//     // Por ejemplo, puedes crear un objeto FormData para enviar las imágenes al servidor
//     const formData = new FormData();

//     // Agregar cada imagen al objeto FormData
//     for (let i = 0; i < this.selectedImages.length; i++) {
//       const imageFile = this.dataURItoFile(this.selectedImages[i], `image_${i}.png`);
//       formData.append('images', imageFile);
//     }

//     // Enviar las imágenes al servidor utilizando una solicitud HTTP
//     // Por ejemplo, utilizando Angular HttpClient
//     this.http.post('api/eventos', formData).subscribe(
//       () => {
//         // Manejar la respuesta del servidor, si es necesario

//         // Luego, puedes llamar a la función createOrUpdateEvent() para crear o actualizar el evento
//         this.createOrUpdateEvent(this.eventForm);
//       },
//       (error: any) => {
//         // Manejar el error al guardar las imágenes, si es necesario
//       }
//     );
//   } else {
//     // Si no hay imágenes seleccionadas, simplemente llamar a la función createOrUpdateEvent() para crear o actualizar el evento
   
//   }
  
// }

// // Función auxiliar para convertir una URL de imagen a un objeto File
// dataURItoFile(dataURI: string, fileName: string): File {
//   const arr = dataURI.split(',');
//   const mimeMatch = arr[0].match(/^data:(.*?);/);
//   if (!mimeMatch) {
//     throw new Error('Formato de URL de imagen no válido');
//   }
//   const mime = mimeMatch[1];
//   const bstr = atob(arr[1]);
//   let n = bstr.length;
//   const u8arr = new Uint8Array(n);
//   while (n--) {
//     u8arr[n] = bstr.charCodeAt(n);
//   }
//   return new File([u8arr], fileName, { type: mime });
// }



  

  createOrUpdateEvent(form: NgForm){

    if (form.valid) {
      // Verificar que todos los campos estén diligenciados
      const { name, address, date_from, date_to, hour, images, description } = form.value;
      if (name && address && date_from && date_to && hour && images && description) {
        // Todos los campos están diligenciados, procesar el formulario
        const newEvent = {
          name: name,
          address: address,
          date_from: date_from,
          date_to: date_to,
          hour: hour,
          images: images,
          description: description
        };

        
        // validar q la data no este vacia
    let data = form.value

    if(data._id){
      // actualizar
      this.eventService.updateEvent(data).subscribe((data)=>{
        alert("Evento actualizado")
        this.getAllEvent()
      })
      this.cleanForm()
      return 
    }

    // crear evento
    delete(data._id)

    this.eventService.createEvent(data).subscribe((data: any)=>{
      console.log(data)
      console.log(ErrorEvent)
      alert(data.status > 399 ? data.error.msg : data.msg);
      this.getAllEvent()

      form.reset();
    });
    }
      } else {
        // Al menos uno de los campos obligatorios no ha sido diligenciado
        // Mostrar un mensaje de error o realizar alguna acción apropiada
        alert('Por favor, complete todos los campos obligatorios.')
        console.log('Por favor, complete todos los campos obligatorios.');
      }
  }

  // Agrega un evento de cambio al campo de entrada de tipo file
// para mostrar la imagen seleccionada


    getAllEvent(){
      this.eventService.getAllEvent().subscribe((data: any) =>{
        this.eventService.allEvent = data.result || []
        console.log(data)
      })
    }

    updateEvent(event: Event){
      this.eventService.eventToCreate = event
    }

    // deleteEvent(_id: string){
    //   this.eventService.deleteEvent(_id).subscribe((data) => {
    //     alert("evento eliminado")
    //     this.getAllEvent()
    //   })
    // }

    // onPhotoSelected(event: HtmlInputEvent): void {
    //   if (event.target.files && event.target.files[0]) {
    //     this.file = <File>event.target.files[0];
    //     // image preview
    //     const reader = new FileReader();
    //     reader.onload = e => this.photoSelected = reader.result;
    //     reader.readAsDataURL(this.file);
    //   }
    // }


  }
