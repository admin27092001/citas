import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentsRoutingModule } from './appointments-routing.module';
import { AppointmentsListComponent } from './views/appointments-list/appointments-list.component';
import {SharedModule} from "../shared/shared.module";
import { AppointmentCreateComponent } from './views/appointment-create/appointment-create.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppointmentsListComponent,
    AppointmentCreateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppointmentsRoutingModule,
    SharedModule,
  ]
})
export class AppointmentsModule { }
