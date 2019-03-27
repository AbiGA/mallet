import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsinsidemiscellaneousinsulaComponent } from './productsinsidemiscellaneousinsula.component';

describe('ProductsinsidemiscellaneousinsulaComponent', () => {
  let component: ProductsinsidemiscellaneousinsulaComponent;
  let fixture: ComponentFixture<ProductsinsidemiscellaneousinsulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsinsidemiscellaneousinsulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsinsidemiscellaneousinsulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
