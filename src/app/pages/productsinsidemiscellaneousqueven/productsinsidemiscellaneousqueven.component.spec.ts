import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsinsidemiscellaneousquevenComponent } from './productsinsidemiscellaneousqueven.component';

describe('ProductsinsidemiscellaneousquevenComponent', () => {
  let component: ProductsinsidemiscellaneousquevenComponent;
  let fixture: ComponentFixture<ProductsinsidemiscellaneousquevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsinsidemiscellaneousquevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsinsidemiscellaneousquevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
