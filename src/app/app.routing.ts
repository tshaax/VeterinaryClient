import { Routes } from '@angular/router';
import { VeterinaryCalendar } from './veterinary-calendar/veterinary-calendar.component';
import { VeterinaryAppointmentDetails } from './veterinary-calendar/veterinary-appointment-details.component';

export const appRoutes: Routes = [
    { path: '', component: VeterinaryCalendar },
    { path: 'appointmentdetails/:id', component: VeterinaryAppointmentDetails },
    { path: "**", redirectTo: '' }
]