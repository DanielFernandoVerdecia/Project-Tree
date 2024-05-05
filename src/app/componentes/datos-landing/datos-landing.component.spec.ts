import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosLandingComponent } from './datos-landing.component';

describe('DatosLandingComponent', () => {
  let component: DatosLandingComponent;
  let fixture: ComponentFixture<DatosLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
