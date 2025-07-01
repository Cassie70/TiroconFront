import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardArco } from './card-arco';

describe('CardArco', () => {
  let component: CardArco;
  let fixture: ComponentFixture<CardArco>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardArco]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardArco);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
