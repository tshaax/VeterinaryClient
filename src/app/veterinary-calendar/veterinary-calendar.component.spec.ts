import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinaryCalendar } from './veterinary-calendar.component';

describe('VeterinaryCalendarComponent', () => {
  let component: VeterinaryCalendar;
  let fixture: ComponentFixture<VeterinaryCalendar>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeterinaryCalendar ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinaryCalendar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
