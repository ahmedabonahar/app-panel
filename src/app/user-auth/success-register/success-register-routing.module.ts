import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessRegisterComponent } from './success-register.component';

const routes: Routes = [
  {path: '', component: SuccessRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuccessRegisterRoutingModule { }
