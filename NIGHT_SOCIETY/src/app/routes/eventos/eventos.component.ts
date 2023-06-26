import { Component } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {

  constructor(public eventService: EventsService ){ }

  ngOnInit(){
    
    this.getAllEvent()
  }


  getAllEvent(){
    this.eventService.getAllEvent().subscribe((data: any) =>{
      this.eventService.allEvent = data.result || []
      console.log(data)
    })
  }
 

}
