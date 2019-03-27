import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsinsidelilokagamiComponent } from './productsinsidelilokagami.component';

describe('ProductsinsidelilokagamiComponent', () => {
  let component: ProductsinsidelilokagamiComponent;
  let fixture: ComponentFixture<ProductsinsidelilokagamiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsinsidelilokagamiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsinsidelilokagamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
