import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { MenuRoutingModule } from './menu-routing.module';
import { BookingComponent } from './booking/booking.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    BookingComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    ReactiveFormsModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
