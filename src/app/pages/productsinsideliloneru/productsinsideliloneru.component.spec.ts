import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsinsideliloneruComponent } from './productsinsideliloneru.component';

describe('ProductsinsideliloneruComponent', () => {
  let component: ProductsinsideliloneruComponent;
  let fixture: ComponentFixture<ProductsinsideliloneruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsinsideliloneruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsinsideliloneruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
