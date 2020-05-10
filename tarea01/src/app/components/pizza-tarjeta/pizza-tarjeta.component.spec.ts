import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaTarjetaComponent } from './pizza-tarjeta.component';

describe('PizzaTarjetaComponent', () => {
  let component: PizzaTarjetaComponent;
  let fixture: ComponentFixture<PizzaTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
