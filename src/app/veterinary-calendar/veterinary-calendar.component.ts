import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'app/services/appointment.service';
import { Appointments } from 'app/models';

@Component({
  selector: 'app-veterinary-calendar',
  templateUrl: './veterinary-calendar.component.html',
  styleUrls: ['./veterinary-calendar.component.css']
})
export class VeterinaryCalendar implements OnInit {
  appointments: Appointments[]
  constructor(public appointmentService: AppointmentService) { }

  ngOnInit() {
    this.getAllAvailableAppointments();


  }

  RetriveResults(): void {
    this.getAllAvailableAppointments();
  }

  getAllAvailableAppointments(): void {

    //TODO: REPLACE BELOW WITH CALL TO SERVICE
    this.appointmentService.getAppointmentResults().subscribe(data => {
      this.appointments = data
    });

    /* this.appointments =  JSON.parse(`[{
      "AppointmentID":"1",
      "AppointmentTime":"09:00",
      "AppointmentDetails":{
      "CustomerName": "Joy Classic",
      "IdentityNumber":"1234567489",
      "PetName":"Woofles"
      }
      },{
      "AppointmentID":"2",
      "AppointmentTime":"10:00",
      "AppointmentDetails":{
      "CustomerName": "Joe Dirt",
      "IdentityNumber":"12345674890",
      "PetName":"Sparkles"
      }}]`);*/
  }

}
