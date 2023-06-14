import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEventosComponent } from './crear-eventos.component';

describe('CrearEventosComponent', () => {
  let component: CrearEventosComponent;
  let fixture: ComponentFixture<CrearEventosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearEventosComponent]
    });
    fixture = TestBed.createComponent(CrearEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
