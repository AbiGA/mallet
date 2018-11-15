import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsinsidewingComponent } from './productsinsidewing.component';

describe('ProductsinsidewingComponent', () => {
  let component: ProductsinsidewingComponent;
  let fixture: ComponentFixture<ProductsinsidewingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsinsidewingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsinsidewingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
