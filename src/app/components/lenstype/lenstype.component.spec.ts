import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenstypeComponent } from './lenstype.component';

describe('LenstypeComponent', () => {
  let component: LenstypeComponent;
  let fixture: ComponentFixture<LenstypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LenstypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LenstypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
