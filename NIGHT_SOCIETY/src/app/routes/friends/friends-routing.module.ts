import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactSectionComponent } from './page/contact-section/contact-section.component';
import { FriendsSuggestionComponent } from './page/friends-suggestion/friends-suggestion.component';
import { ChatComponent } from './page/chat/chat.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'contact-section', component: ContactSectionComponent },
      { path: 'friends-suggestion', component: FriendsSuggestionComponent },
      { path: 'chat', component: ChatComponent },
      { path: 'user-profile', component: UserProfileComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FriendsRoutingModule {}
