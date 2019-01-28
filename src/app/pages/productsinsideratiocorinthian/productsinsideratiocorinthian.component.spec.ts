import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsinsideratiocorinthianComponent } from './productsinsideratiocorinthian.component';

describe('ProductsinsideratiocorinthianComponent', () => {
  let component: ProductsinsideratiocorinthianComponent;
  let fixture: ComponentFixture<ProductsinsideratiocorinthianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsinsideratiocorinthianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsinsideratiocorinthianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
