import { Component, OnInit, Input } from '@angular/core';
import { AppointmentDetails, Appointments } from 'app/models';
import { AppointmentService } from 'app/services/appointment.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-veterinary-appointment-details',
  templateUrl: './veterinary-appointment-details.component.html',
  styleUrls: ['./veterinary-appointment-details.component.css']
})
export class VeterinaryAppointmentDetails implements OnInit {
  AppointmentDetail: AppointmentDetails
  appointment: Appointments
  constructor(public appointmentService: AppointmentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.fetchData();
  }

  //TODO: ADD METHOD TO SHOW DETAIL

  fetchData() {

    var id = this.route.snapshot.params.id
    this.appointmentService.getAppointmentResults().subscribe(res => {
      this.appointment = null;
      this.AppointmentDetail = null;

      this.appointment = res.find(x => x.AppointmentID == id);

      this.AppointmentDetail = this.appointment.AppointmentDetails;

    });




  }

  cancel(): void {
    this.router.navigate([''])
  }

}
