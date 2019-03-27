import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsinsidemiscellaneouskreoComponent } from './productsinsidemiscellaneouskreo.component';

describe('ProductsinsidemiscellaneouskreoComponent', () => {
  let component: ProductsinsidemiscellaneouskreoComponent;
  let fixture: ComponentFixture<ProductsinsidemiscellaneouskreoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsinsidemiscellaneouskreoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsinsidemiscellaneouskreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
