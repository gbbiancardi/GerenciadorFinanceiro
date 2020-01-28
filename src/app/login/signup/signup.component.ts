import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})

export class SignUpComponent implements OnInit {

    signUp: FormGroup;
    
    constructor( ) { 

    }

    ngOnInit(): void {
        this.signUp = new FormGroup({
            nome: new FormControl(),
            email: new FormControl(),
            senha: new FormControl(),
        });
    }
 }