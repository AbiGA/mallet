import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsinsidebratusComponent } from './productsinsidebratus.component';

describe('ProductsinsidebratusComponent', () => {
  let component: ProductsinsidebratusComponent;
  let fixture: ComponentFixture<ProductsinsidebratusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsinsidebratusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsinsidebratusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
