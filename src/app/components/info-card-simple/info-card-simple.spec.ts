import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCardSimple } from './info-card-simple';

describe('InfoCardSimple', () => {
  let component: InfoCardSimple;
  let fixture: ComponentFixture<InfoCardSimple>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoCardSimple]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoCardSimple);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
