import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriasSuperacionComponent } from './historias-superacion.component';

describe('HistoriasSuperacionComponent', () => {
  let component: HistoriasSuperacionComponent;
  let fixture: ComponentFixture<HistoriasSuperacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriasSuperacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriasSuperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
