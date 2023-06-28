import { Component } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-header-notifications',
  templateUrl: './header-notifications.component.html',
  styleUrls: ['./header-notifications.component.css']
})


export class HeaderNotificationsComponent {
  comment: string = ""
  likes: number = 0
  comments: string[] = []
  comments_count: number = 0

  addComment(){
    if(this.comment !== ""){
      this.comments.push(this.comment)
      this.comment = ""
      this.comments_count = this.comments.length

    }

  }
}
