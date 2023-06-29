import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { NgModel } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-calificar',
  templateUrl: './calificar.component.html',
  styleUrls: ['./calificar.component.css'],
})
export class CalificarComponent {
  @Input() event_id = '';
  selectedRating: number;
  comment: string = '';

  constructor(private http: HttpClient, public eventService: EventsService) {
    this.selectedRating = 0
  }

  ngOnInit() {
    console.log(this.event_id);
  }

  rateEvent(rating: string | number, _id: string) {
    this.selectedRating = parseInt(rating.toString());
    const data = {
      _id,
      stars: this.selectedRating,
      comment: this.comment,
      user_id: 'id_usuario',
    }

    console.log({data})
    alert("Evento calificado")

    this.eventService.rateEvent(data).subscribe(
      (data) => {
        console.log({data})
      },
      (err) => console.log(err)
    )
    
  }
}
