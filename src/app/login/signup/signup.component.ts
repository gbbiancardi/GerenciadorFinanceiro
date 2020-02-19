import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

import { NewUser } from './new-user';
import { SignUpService } from './signup.service';
import { error } from 'util';
import { PlatformDetectorService } from 'src/app/core/platform/platform-detector.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
})

export class SignUpComponent implements OnInit {

    signupForm: FormGroup;
    @ViewChild('emailInput', { static: true }) emailInput: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
        private signUpService: SignUpService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService
    ) { }

    ngOnInit(): void {
        this.signupForm = this.formBuilder.group({
            nome: ['',
                [
                    Validators.required,
                    Validators.minLength(7),
                    Validators.maxLength(50)
                ]
            ],
            email: ['',
                [
                    Validators.required,
                    Validators.email
                ],
            ],
            senha: ['',
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(18)
                ]
            ],
            confirmSenha: ['',
                Validators.required
            ]
        }, {
            validator: this.passwordMatchValidator
        }
        );

        this.platformDetectorService.isPlatformBrowser() &&
            this.emailInput.nativeElement.focus();
    }

    passwordMatchValidator(c: AbstractControl): { invalid: boolean } {

        if (c.get('senha').value !== c.get('confirmSenha').value) {
            return {invalid: true};
        }
    }

    signup() {

        const newUser = this.signupForm.getRawValue() as NewUser;
        this.signUpService
            .signup(newUser)
            .subscribe(
                () => this.router.navigate(['login']),
                err => console.log(error)
            );
    }
}