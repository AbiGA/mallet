import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsinsideratioionicComponent } from './productsinsideratioionic.component';

describe('ProductsinsideratioionicComponent', () => {
  let component: ProductsinsideratioionicComponent;
  let fixture: ComponentFixture<ProductsinsideratioionicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsinsideratioionicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsinsideratioionicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
