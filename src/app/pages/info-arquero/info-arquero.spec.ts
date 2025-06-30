import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoArquero } from './info-arquero';

describe('InfoArquero', () => {
  let component: InfoArquero;
  let fixture: ComponentFixture<InfoArquero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoArquero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoArquero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
