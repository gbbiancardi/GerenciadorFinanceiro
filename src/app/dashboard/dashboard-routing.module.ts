import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GraficoComponent } from './grafico/grafico.component';
import { ObjetivoComponent } from './objetivo/objetivo.component';
import { AtualizaComponent } from './atualiza/atualiza.component';
import { DashboardComponent } from './dashboard.component';
import { PerfilComponent } from './perfil/perfil.component';
import { SuporteComponent } from './suporte/suporte.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
            title: 'Moneyger - Dashboard'
        },
        children: [
            {
                path: '',
                component: GraficoComponent,
                data: {
                    title: 'Moneyger - Dashboard'
                }
            },
            {
                path: 'objetivo',
                component: ObjetivoComponent,
                data: {
                    title: 'Moneyger - Objetivo'
                }
            },
            {
                path: 'atualiza',
                component: AtualizaComponent,
                data: {
                    title: 'Moneyger - Receita e Despesa'
                }
            },
            {
                path: 'perfil',
                component: PerfilComponent,
                data: {
                    title: 'Moneyger - Perfil de Usuário'
                }
            },
            {
                path: 'suporte',
                component: SuporteComponent,
                data: {
                    title: 'Moneyger - Suporte'
                }
            }
        ]
    },
    
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]

})

export class DashboardRoutingModule { }