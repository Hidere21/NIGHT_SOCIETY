import { Component } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(public event: EventsService, public router: Router){}

  // ngOnInit(){
  //   this.getDate()
  // }
  urlImages: string = ""
  nombre: string = "nicolas"
  urlImagesObject: []= []
  result: any


  getDate(){
    this.event.getAllEvent().subscribe(

      (data)=>{
        this.result =data
        this.urlImagesObject = this.result.result

        console.log(this.result.result);

      }

    )
  }
}
