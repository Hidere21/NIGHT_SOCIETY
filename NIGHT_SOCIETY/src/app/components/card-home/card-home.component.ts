import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.css']
})
export class CardHomeComponent {
  comment: string = ""
  comments: string[] = []
  comments_count: number = 0

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
