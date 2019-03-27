import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsinsidemensaroundcubeComponent } from './productsinsidemensaroundcube.component';

describe('ProductsinsidemensaroundcubeComponent', () => {
  let component: ProductsinsidemensaroundcubeComponent;
  let fixture: ComponentFixture<ProductsinsidemensaroundcubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsinsidemensaroundcubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsinsidemensaroundcubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
