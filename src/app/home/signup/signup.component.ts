import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { NewUser } from './new-user';
import { SignUpService } from './signup.service';
import { error } from 'util';
import { PlatformDetectorService } from 'src/app/core/platform/platform-detector.service';
import { userNamePassword } from './username-password.validator';

@Component({
    templateUrl: './signup.component.html',
    providers: [ UserNotTakenValidatorService ]
})

export class SignUpComponent implements OnInit {
    
    signupForm: FormGroup;
    @ViewChild('emailInput', {static: true}) emailInput: ElementRef<HTMLInputElement>;
    
    constructor(
        private formBuilder: FormBuilder,
        private userNotTakenValidatorService: UserNotTakenValidatorService,
        private signUpService: SignUpService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService
    ) { }

    ngOnInit(): void {
        this.signupForm = this.formBuilder.group({
             email: ['', 
                [
                    Validators.required,
                    Validators.email
                ]
            ],
             userName: ['', 
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(40)
                ],
                this.userNotTakenValidatorService.checkUserNameTaken()
            ],
             fullName: ['', 
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(30)
                ]
            ],
             password: ['', 
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(18)
                ]
            ]
        }, {
            validator: userNamePassword
        });

        this.platformDetectorService.isPlatformBrowser() && 
            this.emailInput.nativeElement.focus();
    }

    signup() {

        if(this.signupForm.valid && !this.signupForm.pending) {
            const newUser = this.signupForm.getRawValue() as NewUser;
            this.signUpService
                .signup(newUser)
                .subscribe(
                    () => this.router.navigate(['']),
                    err => console.log(error)
                );
        }
    }
 }