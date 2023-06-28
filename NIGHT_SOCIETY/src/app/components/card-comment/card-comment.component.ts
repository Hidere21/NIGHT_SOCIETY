import { Component } from '@angular/core';
import {CardHomeComponent} from '../card-home/card-home.component'

@Component({
  selector: 'app-card-comment',
  templateUrl: './card-comment.component.html',
  styleUrls: ['./card-comment.component.css']
})
export class CardCommentComponent {
  comment: string = ""
  comments: string[] = []
  addComment(){
    if(this.comment !== ""){
      this.comments.push(this.comment)
      this.comment = ""

    }


  }
}
