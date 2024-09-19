import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { AuthGuard } from './auth/guard/auth.guard';

export const routes: Routes = 
[
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: 'register', component: RegisterComponent, pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'form', component: FormComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  {path: '**', redirectTo: '/login', pathMatch: 'full'}
];
