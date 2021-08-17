import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VeterinaryCalendar } from './veterinary-calendar/veterinary-calendar.component';
import { VeterinaryThumbnail } from './veterinary-calendar/veterinary-thumbnail.component';
import { appRoutes } from './app.routing';
import { RouterModule } from '@angular/router';
import { AppointmentService } from './services/appointment.service';
import { VeterinaryAppointmentDetails } from './veterinary-calendar/veterinary-appointment-details.component';

@NgModule({
  declarations: [
    AppComponent,
    VeterinaryCalendar,
    VeterinaryThumbnail,
    VeterinaryAppointmentDetails
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
