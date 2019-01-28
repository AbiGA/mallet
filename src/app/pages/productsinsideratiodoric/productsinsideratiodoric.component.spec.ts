import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsinsideratiodoricComponent } from './productsinsideratiodoric.component';

describe('ProductsinsideratiodoricComponent', () => {
  let component: ProductsinsideratiodoricComponent;
  let fixture: ComponentFixture<ProductsinsideratiodoricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsinsideratiodoricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsinsideratiodoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
