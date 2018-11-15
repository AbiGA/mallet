import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsinsidestumpComponent } from './productsinsidestump.component';

describe('ProductsinsidestumpComponent', () => {
  let component: ProductsinsidestumpComponent;
  let fixture: ComponentFixture<ProductsinsidestumpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsinsidestumpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsinsidestumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
