import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class DashboardModule { }
