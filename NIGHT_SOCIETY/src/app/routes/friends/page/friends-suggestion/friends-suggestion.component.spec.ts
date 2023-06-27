import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsSuggestionComponent } from './friends-suggestion.component';

describe('FriendsSuggestionComponent', () => {
  let component: FriendsSuggestionComponent;
  let fixture: ComponentFixture<FriendsSuggestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FriendsSuggestionComponent]
    });
    fixture = TestBed.createComponent(FriendsSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
