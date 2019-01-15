import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsinsidelucernaobtuseComponent } from './productsinsidelucernaobtuse.component';

describe('ProductsinsidelucernaobtuseComponent', () => {
  let component: ProductsinsidelucernaobtuseComponent;
  let fixture: ComponentFixture<ProductsinsidelucernaobtuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsinsidelucernaobtuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsinsidelucernaobtuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
