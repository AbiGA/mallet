import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsinsidestumprobbiesofaComponent } from './productsinsidestumprobbiesofa.component';

describe('ProductsinsidestumprobbiesofaComponent', () => {
  let component: ProductsinsidestumprobbiesofaComponent;
  let fixture: ComponentFixture<ProductsinsidestumprobbiesofaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsinsidestumprobbiesofaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsinsidestumprobbiesofaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
