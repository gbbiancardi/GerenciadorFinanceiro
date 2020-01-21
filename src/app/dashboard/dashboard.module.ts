import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ChartsModule } from 'ng2-charts';

import { HeaderComponent } from '../core/header/header.component';
import { AtualizaComponent } from './atualiza/atualiza.component';
import { ObjetivoComponent } from './objetivo/objetivo.component';
import { PerfilComponent } from './perfil/perfil.component';
import { SuporteComponent } from './suporte/suporte.component';
import { GraficoComponent } from './grafico/grafico.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AtualizaComponent,
    ObjetivoComponent,
    PerfilComponent,
    SuporteComponent,
    GraficoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ChartsModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class DashboardModule { }
