import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';
import { SingInComponent } from './user-auth/sing-in/sing-in.component';
import { SingUpComponent } from './user-auth/sing-up/sing-up.component';
import { SuccessRegisterComponent } from './user-auth/success-register/success-register.component';
const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: SingInComponent },
  { path: 'sing-up', component: SingUpComponent },
  { path: 'success-register', component: SuccessRegisterComponent },
  {
    path:'cpanel/posts',
    canActivate: [AuthGuard],
    loadChildren: ()=> import("./c-panel/c-panel.module").then(m => m.CPanelModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
