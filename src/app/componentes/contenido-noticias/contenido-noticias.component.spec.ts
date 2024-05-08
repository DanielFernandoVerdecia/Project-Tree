import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoNoticiasComponent } from './contenido-noticias.component';

describe('ContenidoNoticiasComponent', () => {
  let component: ContenidoNoticiasComponent;
  let fixture: ComponentFixture<ContenidoNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoNoticiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
