import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsinsidemiscellaneousarchitectureComponent } from './productsinsidemiscellaneousarchitecture.component';

describe('ProductsinsidemiscellaneousarchitectureComponent', () => {
  let component: ProductsinsidemiscellaneousarchitectureComponent;
  let fixture: ComponentFixture<ProductsinsidemiscellaneousarchitectureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsinsidemiscellaneousarchitectureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsinsidemiscellaneousarchitectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
