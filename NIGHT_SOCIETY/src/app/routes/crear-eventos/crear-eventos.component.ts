import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventsService } from 'src/app/services/events.service';
import { Event } from 'src/app/models/event.model';

@Component({
  selector: 'app-crear-eventos',
  templateUrl: './crear-eventos.component.html',
  styleUrls: ['./crear-eventos.component.css']
})
export class CrearEventosComponent {

  constructor(public eventService: EventsService){ }

  ngOnInit(){
    this.getAllEvent()
  }

  cleanForm(){
    this.eventService.eventToCreate = new Event()
  }

  // metodo

  createOrUpdateEvent(form: NgForm){

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
      alert(data.status > 399 ? data.error.msg : data.msg);
      this.getAllEvent()
    });
    }

    getAllEvent(){
      this.eventService.getAllEvent().subscribe((data: any) =>{
        this.eventService.allEvent = data.result || []
        console.log(data)
      })
    }

    // deleteEvent(_id: string){
    //   this.eventService.deleteEvent(_id).subscribe((data) => {
    //     alert("evento eliminado")
    //     this.getAllEvent()
    //   })
    // }

    updateProduct(event: Event){
      this.eventService.eventToCreate = event

    }


}
