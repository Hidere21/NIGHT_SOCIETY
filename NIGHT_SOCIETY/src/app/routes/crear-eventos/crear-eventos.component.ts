import { Component, OnInit, ViewChild  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventsService } from 'src/app/services/events.service';
import { Event } from 'src/app/models/eventN.model';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-crear-eventos',
  templateUrl: './crear-eventos.component.html',
  styleUrls: ['./crear-eventos.component.css']
})
export class CrearEventosComponent implements OnInit {

  @ViewChild('eventForm', { static: true })
  eventForm!: NgForm;

  selectedImages: File[] = [];
  imageUrls: any[] = [];
  private fileTmp:any;
  restService: any;

  // http: any;

  constructor(public eventService: EventsService, private http: HttpClient){ 
    this.selectedImages = [];
   }

  ngOnInit(){
    this.getAllEvent()
    
  }

  cleanForm(){
    this.eventService.eventToCreate = new Event()
  }

  // onImageSelect(event: any) {
  //   this.selectedImages = Array.from(event.target.files);
  //   this.previewImages();
  // }

  // previewImages() {
  //   this.imageUrls = [];
  
  //   for (let i = 0; i < this.selectedImages.length; i++) {
  //     const file = this.selectedImages[i];
  //     const reader = new FileReader();
  
  //     reader.onload = (e: any) => {
  //       const url = e.target.result;
  //       this.imageUrls.push({ url });
  //     };
  
  //     reader.readAsDataURL(file);
  //   }
  // }
  
  //   onFileChange(event: any) {
  //   this.selectedImages = event.target.files;
  // }


  
  getFile($event: any): void {
    //TODO esto captura el archivo!
    const [ file ] = $event.target.files;
    this.fileTmp = {
      fileRaw:file,
      fileName:file.name
    }
  }

  sendFile():void{
  
    const body = new FormData();
    body.append('myFile', this.fileTmp.fileRaw, this.fileTmp.fileName);
  
    this.restService.sendPost(body)
    .subscribe((res: any) => console.log(res))
  }



  createOrUpdateEvent(form: NgForm){

     if (form.valid) {
      // Verificar que todos los campos estén diligenciados
      const { name, address, date_from, date_to, hour, images, description } = form.value;
      if (name && address && date_from && date_to && hour && images && description) {
        // Todos los campos están diligenciados, procesar el formulario
        const newEvent: any = {
          name: name,
          address: address,
          date_from: date_from,
          date_to: date_to,
          hour: hour,
          images: images,
          description: description
        };

        
    let data = newEvent

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
        alert('Por favor, complete todos los campos obligatorios.')
        console.log('Por favor, complete todos los campos obligatorios.');
      }

      this.http.post('/api/create', FormData).subscribe((response) => {
        // Procesar la respuesta del backend
        console.log(response);
      });
  }

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

  
    // sendFile():void{
  
    //   const body = new FormData();
    //   body.append('myFile', this.fileTmp.fileRaw, this.fileTmp.fileName);
    
    //   this.restService.sendPost(body)
    //   .subscribe((res: any) => console.log(res))
    // }
  }

  
