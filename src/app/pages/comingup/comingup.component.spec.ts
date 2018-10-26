import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingupComponent } from './comingup.component';

describe('ComingupComponent', () => {
  let component: ComingupComponent;
  let fixture: ComponentFixture<ComingupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComingupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComingupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
