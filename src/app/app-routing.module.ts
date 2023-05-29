import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { LoginComponent } from './routes/login/login.component'
import { StudentsComponent } from './routes/students/students.component';

const routes: Routes = [
  {path: '', pathMatch: "full", redirectTo: "/home"},
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "students", component: StudentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
