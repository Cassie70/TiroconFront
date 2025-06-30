import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Invitar } from './invitar';

describe('Invitar', () => {
  let component: Invitar;
  let fixture: ComponentFixture<Invitar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Invitar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Invitar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
