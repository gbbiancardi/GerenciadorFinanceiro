import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})

export class SignUpComponent implements OnInit {

    signUpForm = this.fb.group({
        nome: ['', Validators.required],
        email: ['', Validators.required],
        senha: ['', Validators.required]
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