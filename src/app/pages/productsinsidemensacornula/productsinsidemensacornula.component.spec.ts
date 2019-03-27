import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsinsidemensacornulaComponent } from './productsinsidemensacornula.component';

describe('ProductsinsidemensacornulaComponent', () => {
  let component: ProductsinsidemensacornulaComponent;
  let fixture: ComponentFixture<ProductsinsidemensacornulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsinsidemensacornulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsinsidemensacornulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
