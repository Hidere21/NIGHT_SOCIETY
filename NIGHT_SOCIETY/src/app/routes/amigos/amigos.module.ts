import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './page/home/home.component';
import { FriendsComponent } from './page/friends/friends.component';
import { ContactsComponent } from './page/contacts/contacts.component';
import { LandingFriendsComponent } from './page/landing-friends/landing-friends.component';
import { CardFriendComponent } from './components/card-friend/card-friend.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { CardContactComponent } from './components/card-contact/card-contact.component';

@NgModule({
  declarations: [
    ContactsComponent,
    FriendsComponent,
    HomeComponent,
    LandingFriendsComponent,
    CardFriendComponent,
    SearchInputComponent,
    CardContactComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HomeComponent,
  ]
})
export class AmigosModule { }
