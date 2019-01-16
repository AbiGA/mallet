import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsinsidewingchairComponent } from './productsinsidewingchair.component';

describe('ProductsinsidewingchairComponent', () => {
  let component: ProductsinsidewingchairComponent;
  let fixture: ComponentFixture<ProductsinsidewingchairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsinsidewingchairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsinsidewingchairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
