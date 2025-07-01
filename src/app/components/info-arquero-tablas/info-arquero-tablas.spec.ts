import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoArqueroTablas } from './info-arquero-tablas';

describe('InfoArqueroTablas', () => {
  let component: InfoArqueroTablas;
  let fixture: ComponentFixture<InfoArqueroTablas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoArqueroTablas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoArqueroTablas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
