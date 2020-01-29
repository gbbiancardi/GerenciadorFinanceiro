import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})

export class SignInComponent implements OnInit {
    
    signInForm = this.fb.group({
        email: ['', 
                [
                    Validators.required, 
                    Validators.email
                ]
            ],
        senha: ['', [
                    Validators.required,
                    Validators.pattern('[0-9a-zA-Z$*&@#]*'),
                    Validators.minLength(6), 
                    Validators.maxLength(16)
                ]
            ]
    });
   
    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {

    }

    onSubmit() {
        // TODO: Use EventEmitter with form value
        console.warn(this.signInForm.value);
    }

    submitForm() {
        this.signInForm.getRawValue;
    }

 }