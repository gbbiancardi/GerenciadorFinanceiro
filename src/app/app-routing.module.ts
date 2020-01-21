import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GraficoComponent } from './dashboard/grafico/grafico.component';
import { HomeComponent } from './home/home.component';
import { ObjetivoComponent } from './dashboard/objetivo/objetivo.component';
import { AtualizaComponent } from './dashboard/atualiza/atualiza.component';


const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'dashboard',
      component: GraficoComponent
    },
    {
      path: 'objetivo',
      component: ObjetivoComponent
    },
    {
      path: 'atualiza',
      component: AtualizaComponent
    },

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
