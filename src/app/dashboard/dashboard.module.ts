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
import { DashboardRoutingModule } from './dashboard.routing.module';
import { DashboardComponent } from './dashboard.component';
import { CoreModule } from '../core/core.module';
import { ObjetivoService } from './objetivo/objetivo.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';

@NgModule({
  declarations: [
    AtualizaComponent,
    ObjetivoComponent,
    PerfilComponent,
    SuporteComponent,
    GraficoComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    VMessageModule,
    CoreModule,
    DashboardRoutingModule
  ],
  providers: [
    ObjetivoService
  ],
  exports: [
    HeaderComponent
  ]
})
export class DashboardModule { }
