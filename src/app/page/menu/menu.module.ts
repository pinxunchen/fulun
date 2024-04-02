import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { MenuRoutingModule } from './menu-routing.module';
import { BookingComponent } from './booking/booking.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    BookingComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MenuRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ]
})
export class MenuModule { }
