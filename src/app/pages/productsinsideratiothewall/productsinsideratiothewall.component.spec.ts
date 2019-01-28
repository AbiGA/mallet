import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsinsideratiothewallComponent } from './productsinsideratiothewall.component';

describe('ProductsinsideratiothewallComponent', () => {
  let component: ProductsinsideratiothewallComponent;
  let fixture: ComponentFixture<ProductsinsideratiothewallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsinsideratiothewallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsinsideratiothewallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
