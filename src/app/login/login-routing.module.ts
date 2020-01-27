import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './signin/signin.component';
import { LoginComponent } from './login.component';
import { SignUpComponent } from './signup/signup.component';


const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        data: {
            title: 'Moneyger - Login'
        },
        children: [
            {
                path: '',
                component: SignInComponent,
                data: {
                    title: 'Moneyger - Login'
                }
            },
            {
                path: 'cadastro',
                component: SignUpComponent,
                data: {
                    title: 'Moneyger - Cadastro'
                }
            },
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

export class LoginRoutingModule { }