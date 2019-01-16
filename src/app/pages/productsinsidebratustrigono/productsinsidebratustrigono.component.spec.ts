import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsinsidebratustrigonoComponent } from './productsinsidebratustrigono.component';

describe('ProductsinsidebratustrigonoComponent', () => {
  let component: ProductsinsidebratustrigonoComponent;
  let fixture: ComponentFixture<ProductsinsidebratustrigonoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsinsidebratustrigonoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsinsidebratustrigonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
