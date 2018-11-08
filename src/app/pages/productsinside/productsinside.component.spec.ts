import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsinsideComponent } from './productsinside.component';

describe('ProductsinsideComponent', () => {
  let component: ProductsinsideComponent;
  let fixture: ComponentFixture<ProductsinsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsinsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsinsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
