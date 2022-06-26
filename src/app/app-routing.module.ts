import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadChildren: ()=> import("./user-auth/sing-in/sign-in.module").then(m => m.SignInModule) },
  { path: 'sing-up',  loadChildren: ()=> import("./user-auth/sing-up/sign-up.module").then(m => m.SignUpModule) },
  { path: 'success-register', loadChildren: ()=> import("./user-auth/success-register/success-register.module").then(m => m.SuccessRegisterModule)  },
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
