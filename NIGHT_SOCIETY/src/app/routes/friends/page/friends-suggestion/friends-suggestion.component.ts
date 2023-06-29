import { Component, OnInit, inject } from '@angular/core';
import { FriendsService } from '../../services/friends.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'friends-suggestion',
  templateUrl: './friends-suggestion.component.html',
  styleUrls: ['./friends-suggestion.component.css'],
})
export class FriendsSuggestionComponent {
  private friendsService = inject(FriendsService);

  public get getUsers(): User[] {
    return this.friendsService.getUsers;
  }
  // ngOnInit(): void {
  //   this.getAllUser();
  // }

  // getAllUser() {
  //   this.friendsService.getAllUser().subscribe((user: User[]) => {
  //     this.friendsService.getUsers = user;
  //     console.log({ user });
  //   });
  // }
  deleteFriends() {
    const friends = false;
    console.log(friends);
  }
}
