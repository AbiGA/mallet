import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsinsidemensachaitableComponent } from './productsinsidemensachaitable.component';

describe('ProductsinsidemensachaitableComponent', () => {
  let component: ProductsinsidemensachaitableComponent;
  let fixture: ComponentFixture<ProductsinsidemensachaitableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsinsidemensachaitableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsinsidemensachaitableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
