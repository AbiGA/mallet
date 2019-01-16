import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Productsinsidewing2Component } from './productsinsidewing2.component';

describe('Productsinsidewing2Component', () => {
  let component: Productsinsidewing2Component;
  let fixture: ComponentFixture<Productsinsidewing2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Productsinsidewing2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Productsinsidewing2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
