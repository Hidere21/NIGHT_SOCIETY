import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventsService } from 'src/app/services/events.service';
import { Router } from '@angular/router';

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


  urlImages: string = ""
  urlImagesObject: any[] = []
  comment: string = ""
  comments: string[] = []
  comments_count: number = 0
  currentObject: any
  result: any
  number:number = 0


  getData(){

    this.event.getAllEvent().subscribe(
      (data)=>{
        this.result =data



        this.urlImagesObject = this.result.result

        console.log(this.result.result);
        for(let i = 0; i< this.urlImagesObject.length; i++){
          this.urlImages = this.result.result[2].images
          console.log(this.urlImages)
        }





}



      )
  }

  likes: number = 0
  like(){
    this.likes++
  }

  addComment(){
    if(this.comment !== ""){
      this.comments.push(this.comment)
      this.comment = ""
      this.comments_count = this.comments.length

    }





}
}
