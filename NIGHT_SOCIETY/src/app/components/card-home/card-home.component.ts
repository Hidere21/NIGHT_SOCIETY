import { Component, Input } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventsService } from 'src/app/services/events.service';
import { Router } from '@angular/router';
import { Event } from '../../models/event.model';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.css'],
})



export class CardHomeComponent   {

  constructor(public event: EventsService, public router:Router  ){
  }
  ngOnInit(){
    this.getData()
  }




  comment: string = ""
  comments: string[] = []
  comments_count: number = 0
  _id:number = 0



  getData(){
    this.event.getAllEvent().subscribe((data: any) =>{
      this.event.allEvent = data.result || []
      console.log(data)})

  }

  likes: number = 0
  like(form: NgForm){


    // validar q la data no este vacia
    let data = form.value

      if(data._id){
        // actualizar
        this.event.updateEvent(data).subscribe((data)=>{
          alert("Evento actualizado")
          this.getData()
        })
        this.cleanForm()
        return
      }
     console.log( data.like)
  }
  cleanForm(){
    this.event.eventToCreate = new Event()
  }

  addComment(){
    if(this.comment !== ""){
      this.comments.push(this.comment)
      this.comment = ""
      this.comments_count = this.comments.length

    }





}
}
