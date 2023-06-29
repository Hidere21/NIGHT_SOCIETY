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

  getAllEvent() {
    this.eventService.getAllEvent().subscribe((data: any) => {
      const currentDate = new Date();
      console.log(data);

      this.eventService.allEvent = data.result.filter(
        (event: any) => {
          const eventDate = moment(event.date_from, 'YYYY-MM-DD').toDate();
          return eventDate > currentDate;
        }
      );

      // Filtrar eventos cuya fecha sea mayor a la fecha actual

      this.eventService.filterEvent = this.eventService.allEvent.filter(
        (event) => {
          const eventDate = moment(event.date_from, 'YYYY-MM-DD').toDate();
          return eventDate > currentDate;
        }
      );
    });
  }

  search = '';
  searchEvent() {
    return this.eventService.filterEvent = this.eventService.allEvent.filter((event) =>
      event.name?.toLowerCase().includes(this.search.toLowerCase())
    );
  }
}
