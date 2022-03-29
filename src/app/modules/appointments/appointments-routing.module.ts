import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppointmentsListComponent} from "./views/appointments-list/appointments-list.component";
import {AppointmentCreateComponent} from "./views/appointment-create/appointment-create.component";

const routes: Routes = [
  {
    path: '',
    component: AppointmentsListComponent,
  },
  {
    path: 'new',
    component: AppointmentCreateComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentsRoutingModule {
}
