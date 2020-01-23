import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {
            title: 'Moneyger - Seu Sistema de Gerenciamento Financeiro'
        },
        children: [
            {
                path: 'signin',
                component: SignInComponent,
                data: {
                    title: 'Sign in'
                }
            },
            {
                path: 'signup',
                component: SignUpComponent,
                data: {
                    title: 'Sign up'
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

export class HomeRoutingModule { }