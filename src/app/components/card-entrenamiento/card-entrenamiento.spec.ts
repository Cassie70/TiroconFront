import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEntrenamiento } from './card-entrenamiento';

describe('CardEntrenamiento', () => {
  let component: CardEntrenamiento;
  let fixture: ComponentFixture<CardEntrenamiento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardEntrenamiento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardEntrenamiento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
