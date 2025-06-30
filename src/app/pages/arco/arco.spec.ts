import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Arco } from './arco';

describe('Arco', () => {
  let component: Arco;
  let fixture: ComponentFixture<Arco>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Arco]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Arco);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
