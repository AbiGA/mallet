import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsinsidelilozoComponent } from './productsinsidelilozo.component';

describe('ProductsinsidelilozoComponent', () => {
  let component: ProductsinsidelilozoComponent;
  let fixture: ComponentFixture<ProductsinsidelilozoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsinsidelilozoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsinsidelilozoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
