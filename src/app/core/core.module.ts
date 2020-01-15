import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    HeaderComponent,
    UserComponent,
    AuthComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
