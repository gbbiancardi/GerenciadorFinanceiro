import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GraficoComponent } from './dashboard/grafico/grafico.component';
import { HomeComponent } from './home/home.component';
import { ObjetivoComponent } from './dashboard/objetivo/objetivo.component';
import { AtualizaComponent } from './dashboard/atualiza/atualiza.component';


const routes: Routes = [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'home'
    },
    {
      path: 'home',
      loadChildren: './home/home.module#HomeModule'
    },
    {
      path: 'dashboard',
      pathMatch: 'full',
      redirectTo: 'dashboard'
    },
    {
      path: 'dashboard',
      loadChildren: './dashboard/dashboard.module#DashboardModule'
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
