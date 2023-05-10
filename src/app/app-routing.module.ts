import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { FlightsComponent } from './flights/flights.component';

const routes: Routes = [
  {
    path:'booking',
    component:BookingComponent
  },
  {
    path:'flights',
    component:FlightsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
