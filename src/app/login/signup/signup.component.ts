import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})

export class SignUpComponent implements OnInit {

    signUpForm = this.fb.group({
        nome: ['', 
                [
                    Validators.required, 
                    Validators.minLength(6), 
                    Validators.maxLength(255), 
                    Validators.pattern('[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]*')
                ]
            ],
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

    constructor(private fb: FormBuilder) {

    }

    ngOnInit(): void {

    }

    onSubmit() {
        // TODO: Use EventEmitter with form value
        console.warn(this.signUpForm.value);
    }

    submitForm() {
        this.signUpForm.getRawValue;
    }
}