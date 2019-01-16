import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsinsidewingrackComponent } from './productsinsidewingrack.component';

describe('ProductsinsidewingrackComponent', () => {
  let component: ProductsinsidewingrackComponent;
  let fixture: ComponentFixture<ProductsinsidewingrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsinsidewingrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsinsidewingrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
