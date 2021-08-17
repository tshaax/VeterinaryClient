import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinaryAppointmentDetails } from './veterinary-appointment-details.component';

describe('VeterinaryAppointmentDetailsComponent', () => {
  let component: VeterinaryAppointmentDetails;
  let fixture: ComponentFixture<VeterinaryAppointmentDetails>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeterinaryAppointmentDetails ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinaryAppointmentDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
