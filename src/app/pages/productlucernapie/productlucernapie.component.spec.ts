import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlucernapieComponent } from './productlucernapie.component';

describe('ProductlucernapieComponent', () => {
  let component: ProductlucernapieComponent;
  let fixture: ComponentFixture<ProductlucernapieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductlucernapieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductlucernapieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
