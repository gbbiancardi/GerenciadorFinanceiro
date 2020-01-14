import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from '../core/header/header.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardComponent,
    HeaderComponent
  ]
})
export class DashboardModule { }
