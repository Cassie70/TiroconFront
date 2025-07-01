import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCompetencia } from './card-competencia';

describe('CardCompetencia', () => {
  let component: CardCompetencia;
  let fixture: ComponentFixture<CardCompetencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCompetencia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCompetencia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
