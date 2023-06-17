import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaddignPageComponent } from './laddign-page.component';

describe('LaddignPageComponent', () => {
  let component: LaddignPageComponent;
  let fixture: ComponentFixture<LaddignPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaddignPageComponent]
    });
    fixture = TestBed.createComponent(LaddignPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
