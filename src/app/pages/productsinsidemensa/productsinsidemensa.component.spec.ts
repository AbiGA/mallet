import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsinsidemensaComponent } from './productsinsidemensa.component';

describe('ProductsinsidemensaComponent', () => {
  let component: ProductsinsidemensaComponent;
  let fixture: ComponentFixture<ProductsinsidemensaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsinsidemensaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsinsidemensaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
