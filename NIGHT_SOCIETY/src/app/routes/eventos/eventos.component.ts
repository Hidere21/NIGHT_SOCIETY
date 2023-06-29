import { Component } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css'],
})
export class EventosComponent {
  constructor(public eventService: EventsService) {}

  ngOnInit() {
    this.getAllEvent();
    this.eventService.filterEvent = this.eventService.allEvent;
  }

  likes = 0;

  incrementarLikes() {
    this.likes++;
  }

  getAllEvent() {
    this.eventService.getAllEvent().subscribe((data: any) => {
      const currentDate = new Date();
      this.eventService.allEvent = data.result.filter(
        (event:any) => {
          const eventDate = moment(event.date_from, 'YYYY-MM-DD').toDate();
          return eventDate > currentDate;
        }
      );

      // Filtrar eventos cuya fecha sea mayor a la fecha actual

      this.eventService.filterEvent = data.result.filter(
        (event: any) => {
          const eventDate = moment(event.date_from, 'YYYY-MM-DD').toDate();
          return eventDate > currentDate;
        }
      );

      // console.log(data);
    });
  }

  search = '';
  searchEvent() {
    this.eventService.filterEvent = this.eventService.allEvent.filter((event) =>
      event.name?.toLowerCase().includes(this.search.toLowerCase())
    );
  }
}


