import { Component, OnInit, inject } from '@angular/core';
import { FriendsService } from '../../services/friends.service';
import { User } from '../../interfaces/user.interface';
import { FriendsData } from '../../interfaces/friends-data.interface';

@Component({
  selector: 'contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css'],
})
export class ContactSectionComponent implements OnInit {
  // Utilizar el SERVICIO friends.service sin un constructor
  private friendsService = inject(FriendsService);
  // TOKEN o ID de la persona - Natalia Pardo
  public tokenOrId = '649b767096ae937b4ad6e6fa';
  // Getters de las propiedades getUsers y myFriends
  public get getUsers(): User[] {
    return this.friendsService.getUsers;
  }
  public get myFriends(): User[] {
    return this.friendsService.myFriends;
  }

  ngOnInit(): void {
    this.getPosibleFriends();
  }

  getFriends() {
    const _id = this.tokenOrId;
    this.friendsService.getFriends(_id).subscribe((data: User[]) => {
      this.friendsService.myFriends = data;
      console.log({ data });
    });
  }

  getPosibleFriends() {
    const _id = this.tokenOrId;
    this.friendsService.getPosibleFriends(_id).subscribe((data: any) => {
      this.friendsService.myFriends = data.posibleFriends;
      console.log({ data });
    });
  }

  deleteFriends(id_user: string) {
    const _id = this.tokenOrId;
    const friendsData: FriendsData = {
      friendId: id_user,
      action: 'delete',
    };
    this.friendsService
      .editFriends({ id: _id, data: friendsData })
      .subscribe(() => {
        const deleteFriend = confirm(
          '¿Esta seguro que desea eliminar a este amigo?'
        );
        if (deleteFriend) alert('Amigo eliminado');
        this.getFriends();
      });
  }

  DeleteFriend() {
    this.myFriends.pop();
  }
}
