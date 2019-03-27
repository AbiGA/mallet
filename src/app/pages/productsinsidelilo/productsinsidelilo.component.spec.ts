import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsinsideliloComponent } from './productsinsidelilo.component';

describe('ProductsinsideliloComponent', () => {
  let component: ProductsinsideliloComponent;
  let fixture: ComponentFixture<ProductsinsideliloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsinsideliloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsinsideliloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
