import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoArqueroGeneral } from './info-arquero-general';

describe('InfoArqueroGeneral', () => {
  let component: InfoArqueroGeneral;
  let fixture: ComponentFixture<InfoArqueroGeneral>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoArqueroGeneral]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoArqueroGeneral);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
