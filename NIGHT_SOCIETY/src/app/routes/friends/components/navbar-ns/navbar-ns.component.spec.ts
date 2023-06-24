import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarNSComponent } from './navbar-ns.component';

describe('NavbarNSComponent', () => {
  let component: NavbarNSComponent;
  let fixture: ComponentFixture<NavbarNSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarNSComponent]
    });
    fixture = TestBed.createComponent(NavbarNSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
