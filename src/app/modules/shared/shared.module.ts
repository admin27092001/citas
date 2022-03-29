import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BaseTemplateComponent } from './templates/base-template/base-template.component';


@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    BaseTemplateComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
