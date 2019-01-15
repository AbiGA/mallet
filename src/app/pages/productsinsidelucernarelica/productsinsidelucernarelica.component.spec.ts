import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsinsidelucernarelicaComponent } from './productsinsidelucernarelica.component';

describe('ProductsinsidelucernarelicaComponent', () => {
  let component: ProductsinsidelucernarelicaComponent;
  let fixture: ComponentFixture<ProductsinsidelucernarelicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsinsidelucernarelicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsinsidelucernarelicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
