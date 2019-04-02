import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsinsidemiscellaneousstratisComponent } from './productsinsidemiscellaneousstratis.component';

describe('ProductsinsidemiscellaneousstratisComponent', () => {
  let component: ProductsinsidemiscellaneousstratisComponent;
  let fixture: ComponentFixture<ProductsinsidemiscellaneousstratisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsinsidemiscellaneousstratisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsinsidemiscellaneousstratisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
