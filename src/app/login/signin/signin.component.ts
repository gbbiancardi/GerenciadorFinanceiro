import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})

export class SignInComponent implements OnInit {
    
    signIn: FormGroup;
   
    constructor( ) { }

    ngOnInit(): void {

        this.signIn = new FormGroup({
            email: new FormControl(),
            senha: new FormControl(),
        });
        
    }

 }