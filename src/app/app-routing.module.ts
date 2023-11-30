import { MeasureRegisterComponent } from './measures/measure-register/measure-register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ChartComponent } from './chart/chart.component';
import { LoginFormComponent } from './security/login-form/login-form.component';
import { RegisterFormComponent } from './security/register-form/register-form.component';
import { MeasuresListComponent } from './measures/measures-list/measures-list.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: 'measures', component: MeasuresListComponent },
  { path: 'measures/new', component: MeasureRegisterComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'login.figma', component: LoginComponent},
  { path: 'register.figma', component: RegisterComponent},
  { path: 'table.figma', component: TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
