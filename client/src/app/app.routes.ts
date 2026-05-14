import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './features/employees/pages/add-employee/add-employee.component';
import { EmployeeListComponent } from './features/employees/pages/employee-list/employee-list.component';
import { DashboardComponent } from './features/employees/pages/dashboard/dashboard.component';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { RegisterComponent } from './features/auth/pages/register/register.component';
import {authGuard } from './core/guards/auth.guard';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'employees',
    pathMatch: 'full'
  },
{
  path: 'employees',
  component: EmployeeListComponent,
  canActivate: [authGuard]
},
{
  path: 'dashboard',
  component: DashboardComponent,
  canActivate: [authGuard]
},
{
  path: 'add-employee',
  component: AddEmployeeComponent,
  canActivate: [authGuard]
},
{
  path: 'edit-employee/:id',
  component: AddEmployeeComponent,
  canActivate: [authGuard]
},
  {
  path: 'login',
  component: LoginComponent
},
{
  path: 'register',
  component: RegisterComponent
}
];