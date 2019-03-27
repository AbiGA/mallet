import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsinsidemiscellaneouslouvreComponent } from './productsinsidemiscellaneouslouvre.component';

describe('ProductsinsidemiscellaneouslouvreComponent', () => {
  let component: ProductsinsidemiscellaneouslouvreComponent;
  let fixture: ComponentFixture<ProductsinsidemiscellaneouslouvreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsinsidemiscellaneouslouvreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsinsidemiscellaneouslouvreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
