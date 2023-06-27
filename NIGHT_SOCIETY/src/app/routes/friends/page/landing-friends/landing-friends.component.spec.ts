import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingFriendsComponent } from './landing-friends.component';

describe('LandingFriendsComponent', () => {
  let component: LandingFriendsComponent;
  let fixture: ComponentFixture<LandingFriendsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingFriendsComponent]
    });
    fixture = TestBed.createComponent(LandingFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
