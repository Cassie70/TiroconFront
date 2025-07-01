import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarArquero } from './editar-arquero';

describe('EditarArquero', () => {
  let component: EditarArquero;
  let fixture: ComponentFixture<EditarArquero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarArquero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarArquero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
