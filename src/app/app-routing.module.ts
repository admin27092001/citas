import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BaseTemplateComponent} from "./modules/shared/templates/base-template/base-template.component";
import {AuthenticationGuard} from "./guards/authentication.guard";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'appointments',
    component: BaseTemplateComponent,
    canActivate: [AuthenticationGuard],
    canActivateChild: [AuthenticationGuard],
    loadChildren: () => import('./modules/appointments/appointments.module').then((m) => m.AppointmentsModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
