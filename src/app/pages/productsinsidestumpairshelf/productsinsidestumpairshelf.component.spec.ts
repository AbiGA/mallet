import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsinsidestumpairshelfComponent } from './productsinsidestumpairshelf.component';

describe('ProductsinsidestumpairshelfComponent', () => {
  let component: ProductsinsidestumpairshelfComponent;
  let fixture: ComponentFixture<ProductsinsidestumpairshelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsinsidestumpairshelfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsinsidestumpairshelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
