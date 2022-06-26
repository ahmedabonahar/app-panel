import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CPanelRoutingModule } from './c-panel-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CPanelRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CPanelModule { }
