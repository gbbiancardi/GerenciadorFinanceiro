import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignInComponent } from './signin/signin.component';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing.module';
import { SignUpComponent } from './signup/signup.component';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { SignUpService } from './signup/signup.service';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    VMessageModule,
    LoginRoutingModule
  ],
  providers: [
    SignUpService
  ]
})
export class LoginModule { }
