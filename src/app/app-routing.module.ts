import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/guard/auth.guard';
const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

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
