import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NgForm} from '@angular/forms'

@Component({
  selector: 'app-calificar',
  templateUrl: './calificar.component.html',
  styleUrls: ['./calificar.component.css'],
  
}


)
export class CalificarComponent {
  selectedRating: number = 0;

  rateEvent(rating: number) {
    this.selectedRating = rating;
  alert (this.selectedRating)}
}
