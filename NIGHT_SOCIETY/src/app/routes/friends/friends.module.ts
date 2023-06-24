import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './page/home/home.component';
import { ContactSectionComponent } from './page/contact-section/contact-section.component';
import { LandingFriendsComponent } from './page/landing-friends/landing-friends.component';
import { NavbarNSComponent } from './components/navbar-ns/navbar-ns.component';
import { FriendsSuggestionComponent } from './page/friends-suggestion/friends-suggestion.component';

@NgModule({
  declarations: [
    HomeComponent,
    LandingFriendsComponent,
    ContactSectionComponent,
    NavbarNSComponent,
    FriendsSuggestionComponent,
  ],
  imports: [CommonModule],
  exports: [
    HomeComponent,
    LandingFriendsComponent,
    ContactSectionComponent,
    NavbarNSComponent,
    FriendsSuggestionComponent,
  ],
})
export class FriendsModule {}
