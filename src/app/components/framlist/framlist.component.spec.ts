import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FramlistComponent } from './framlist.component';

describe('FramlistComponent', () => {
  let component: FramlistComponent;
  let fixture: ComponentFixture<FramlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FramlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FramlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
