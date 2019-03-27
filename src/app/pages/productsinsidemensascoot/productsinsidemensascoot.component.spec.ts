import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsinsidemensascootComponent } from './productsinsidemensascoot.component';

describe('ProductsinsidemensascootComponent', () => {
  let component: ProductsinsidemensascootComponent;
  let fixture: ComponentFixture<ProductsinsidemensascootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsinsidemensascootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsinsidemensascootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
