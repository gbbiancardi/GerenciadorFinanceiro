import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
      data: {
        title: 'Moneyger - Seu Sistema de Gerenciamento Financeiro'
    }
    },
    {
      path: 'login',
      pathMatch: 'full',
      redirectTo: 'login'
    },
    {
      path: 'login',
      loadChildren: './login/login.module#LoginModule'
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
