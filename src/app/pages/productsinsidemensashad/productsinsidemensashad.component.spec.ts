import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsinsidemensashadComponent } from './productsinsidemensashad.component';

describe('ProductsinsidemensashadComponent', () => {
  let component: ProductsinsidemensashadComponent;
  let fixture: ComponentFixture<ProductsinsidemensashadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsinsidemensashadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsinsidemensashadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
