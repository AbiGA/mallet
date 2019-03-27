import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsinsidemensastolicaComponent } from './productsinsidemensastolica.component';

describe('ProductsinsidemensastolicaComponent', () => {
  let component: ProductsinsidemensastolicaComponent;
  let fixture: ComponentFixture<ProductsinsidemensastolicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsinsidemensastolicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsinsidemensastolicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
