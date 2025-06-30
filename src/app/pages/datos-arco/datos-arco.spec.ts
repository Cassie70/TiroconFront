import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosArco } from './datos-arco';

describe('DatosArco', () => {
  let component: DatosArco;
  let fixture: ComponentFixture<DatosArco>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosArco]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosArco);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
