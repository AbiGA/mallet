import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsinsideratiotableComponent } from './productsinsideratiotable.component';

describe('ProductsinsideratiotableComponent', () => {
  let component: ProductsinsideratiotableComponent;
  let fixture: ComponentFixture<ProductsinsideratiotableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsinsideratiotableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsinsideratiotableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
