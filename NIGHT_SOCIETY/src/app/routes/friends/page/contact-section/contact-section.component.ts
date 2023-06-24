import { Component, inject, signal } from '@angular/core';
import { FriendsService } from '../../services/friends.service';
import { User } from '../../interfaces/user.interface';
import { FriendsData } from '../../interfaces/data.interface';

@Component({
  selector: 'contact-section',
  templateUrl: './contact-section.component.html',
  styles: [],
})
export class ContactSectionComponent {
  // Utilizar el friends.service sin un constructor
  private friendsService = inject(FriendsService);
  // Token o ID de la persona
  public tokenOrId = '648bcabb090e70302ccf4163';

  public get friends(): User[] {
    return this.friendsService.getUsers;
  }

  ngOnInit(): void {
    const allFriends = this.getAllUser();
  }

  getAllUser() {
    this.friendsService.getAllUser().subscribe((user: User[]) => {
      this.friendsService.getUsers = user;
      console.log({ user });
    });
  }

  getFriends() {
    const _id = this.tokenOrId; // Lo tiene que sacar del token
    this.friendsService.getFriends(_id).subscribe((data: User[]) => {
      this.friendsService.myFriends = data;
      console.log({ data });
    });
  }

  deleteFriends(id_user: string) {
    const _id = this.tokenOrId;
    const friendsData: FriendsData = {
      friendId: id_user,
      action: 'delete',
    };
    this.friendsService.editFriends(_id, friendsData).subscribe(() => {
      const deleteFriend = confirm(
        '¿Esta seguro que desea eliminar a este amigo?'
      );
      if (deleteFriend) alert('Amigo eliminado');
      this.getFriends();
    });
  }
}
