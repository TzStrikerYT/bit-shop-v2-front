import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminGuard } from './guards/admin/admin.guard';
import { userGuard } from './guards/user/user.guard';
import { AdminComponent } from './routes/admin/admin.component';
import { HomeComponent } from './routes/home/home.component';
import { LoginComponent } from './routes/login/login.component'
import { RegisterComponent } from './routes/register/register.component';
import { StudentsComponent } from './routes/students/students.component';

const routes: Routes = [
  {path: '', pathMatch: "full", redirectTo: "/home"},
  {path: "home", component: HomeComponent, canActivate: [userGuard]},
  {path: "login", component: LoginComponent},
  {path: "students", component: StudentsComponent},
  {path: "register", component: RegisterComponent},
  {path: 'admin', component: AdminComponent, canActivate: [userGuard, adminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
