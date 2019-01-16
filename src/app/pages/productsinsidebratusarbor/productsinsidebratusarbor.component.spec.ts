import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsinsidebratusarborComponent } from './productsinsidebratusarbor.component';

describe('ProductsinsidebratusarborComponent', () => {
  let component: ProductsinsidebratusarborComponent;
  let fixture: ComponentFixture<ProductsinsidebratusarborComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsinsidebratusarborComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsinsidebratusarborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
