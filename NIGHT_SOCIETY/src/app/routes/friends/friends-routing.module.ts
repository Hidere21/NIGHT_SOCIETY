import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactSectionComponent } from './page/contact-section/contact-section.component';
import { FriendsSuggestionComponent } from './page/friends-suggestion/friends-suggestion.component';
import { ChatComponent } from './page/chat/chat.component';
import { LaddignPageComponent } from '../laddign-page/laddign-page.component';
import { LandingFriendsComponent } from './page/landing-friends/landing-friends.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'landing-friends', component: LandingFriendsComponent },
      { path: 'contact-section', component: ContactSectionComponent },
      { path: 'friends-suggestion', component: FriendsSuggestionComponent },
      { path: 'chat', component: ChatComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FriendsRoutingModule {}
