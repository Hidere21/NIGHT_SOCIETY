import { Component, OnInit, inject } from '@angular/core';
import { FriendsService } from '../../services/friends.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'friends-suggestion',
  templateUrl: './friends-suggestion.component.html',
  styleUrls: ['./friends-suggestion.component.css'],
})
export class FriendsSuggestionComponent implements OnInit {
  // Injectar el FriendsService
  private friendsService = inject(FriendsService);
  // Get - getUser: User[] = []
  public get getUsers(): User[] {
    return this.friendsService.getUsers;
  }
  ngOnInit(): void {
    this.getAllUser();
  }
  // Obteniendo todos los usuarios
  getAllUser() {
    this.friendsService.getAllUser().subscribe((user: User[]) => {
      this.friendsService.getUsers = user;
      console.log({ user });
    });
  }

  // Agregarle un nuevo amigo a Natalia Pardo
  addFriend() {}
}
