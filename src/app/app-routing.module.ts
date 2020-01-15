import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GraficoComponent } from './dashboard/grafico/grafico.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'dashboard',
      component: GraficoComponent
    }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
