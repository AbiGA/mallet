import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsinsideratioergosComponent } from './productsinsideratioergos.component';

describe('ProductsinsideratioergosComponent', () => {
  let component: ProductsinsideratioergosComponent;
  let fixture: ComponentFixture<ProductsinsideratioergosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsinsideratioergosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsinsideratioergosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
