import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuccessRegisterRoutingModule } from './success-register-routing.module';
import { SuccessRegisterComponent } from './success-register.component';


@NgModule({
  declarations: [
    SuccessRegisterComponent
  ],
  imports: [
    CommonModule,
    SuccessRegisterRoutingModule
  ]
})
export class SuccessRegisterModule { }
