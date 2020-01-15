import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { SignInComponent } from './signin/signin.component';


@NgModule({
  declarations: [
    SignInComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    VMessageModule,
    RouterModule,
    HomeRoutingModule,
  ],
  providers: [

  ]
})
export class HomeModule { }
