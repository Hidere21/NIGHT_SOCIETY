import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FriendsRoutingModule } from './friends-routing.module';
import { ContactSectionComponent } from './page/contact-section/contact-section.component';
import { FriendsSuggestionComponent } from './page/friends-suggestion/friends-suggestion.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ChatComponent } from './page/chat/chat.component';
import { NavbarNSComponent } from './components/navbar-ns/navbar-ns.component';
import { LandingFriendsComponent } from './page/landing-friends/landing-friends.component';

@NgModule({
  declarations: [
    ChatComponent,
    ContactSectionComponent,
    FriendsSuggestionComponent,
    NavbarNSComponent,
    UserProfileComponent,
    LandingFriendsComponent,
  ],
  imports: [CommonModule, FriendsRoutingModule],
  exports: [ContactSectionComponent, LandingFriendsComponent],
})
export class FriendsModule {}
