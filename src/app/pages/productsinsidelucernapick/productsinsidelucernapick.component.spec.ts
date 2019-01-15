import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsinsidelucernapickComponent } from './productsinsidelucernapick.component';

describe('ProductsinsidelucernapickComponent', () => {
  let component: ProductsinsidelucernapickComponent;
  let fixture: ComponentFixture<ProductsinsidelucernapickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsinsidelucernapickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsinsidelucernapickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
