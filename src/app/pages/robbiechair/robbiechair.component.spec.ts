import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobbiechairComponent } from './robbiechair.component';

describe('RobbiechairComponent', () => {
  let component: RobbiechairComponent;
  let fixture: ComponentFixture<RobbiechairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobbiechairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobbiechairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
