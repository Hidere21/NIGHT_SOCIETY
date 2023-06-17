import { Component } from '@angular/core';
import { FriendsService } from '../../services/friends.service';

@Component({
  selector: 'card-contact',
  templateUrl: './card-contact.component.html',
  styles: []
})
export class CardContactComponent {

  ngOnInit() {
    this.getFriends();
  }
  constructor(public friendsService: FriendsService) { }

  getAllUser() {
    this.friendsService.getAllUser().subscribe((user: any) => {
      this.friendsService.getUsers = user;
      console.log({ user });
    })
  }

  getFriends() {
    const _id = "648bcabb090e70302ccf4163" // lo tiene que sacar del token
    this.friendsService.getFriends(_id).subscribe((data: any) => {
      this.friendsService.myFriends = data.friends
      console.log({ data });
    })
  }

  deleteFriends(id_user: string) {
    const _id = "648bcabb090e70302ccf4163" // 
    const obj = {
      friendId: id_user,
      action: "delete"
    }
    this.friendsService.editFriends(_id, obj).subscribe((data: any) => {
      let qst = confirm("Esta seguro que desesa eliminar a este amigo?")
      if (qst) alert("Amigo eliminado")
      this.getFriends();
    }, (err: any) => console.log(err))
  }


}
