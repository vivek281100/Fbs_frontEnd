import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { FlightsComponent } from './flights/flights.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path:'booking',
    component:BookingComponent
  },
  {
    path:'flights',
    component:FlightsComponent
  },
  {
    path:'signIn',
    component:SignInComponent
  },
  {
    path:'signup',
    component:SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
