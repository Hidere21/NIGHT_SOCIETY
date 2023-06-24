import { Component } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {

  constructor(public eventService: EventsService ){ }

  ngOnInit(){
    
    this.getAllEvent()
    this.eventService.filterEvent = this.eventService.allEvent
  }


  getAllEvent(){
    this.eventService.getAllEvent().subscribe((data: any) =>{
      this.eventService.allEvent = data.result || []
      this.eventService.filterEvent = data.result || []
      console.log(data)
    })
  }
 

  search = ''
  searchEvent(){
  this.eventService.filterEvent = this.eventService.allEvent.filter(event => event.name?.toLowerCase().includes(this.search.toLowerCase()))
}





}
