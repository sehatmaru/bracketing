import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { OtpValidationComponent } from './pages/otp-validation/otp-validation.component';
import { PasswordForgotComponent } from './pages/password-forgot/password-forgot.component';
import { PasswordResetComponent } from './pages/password-reset/password-reset.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    OtpValidationComponent,
    PasswordForgotComponent,
    PasswordResetComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
  ]
})
export class AuthModule { }
