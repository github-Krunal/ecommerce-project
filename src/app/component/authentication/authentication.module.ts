import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const AUTHENTICATION_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch:"full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "registration",
    component: RegistrationComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(AUTHENTICATION_ROUTES),
    CommonModule
  ]
})
export class AuthenticationModule { }
