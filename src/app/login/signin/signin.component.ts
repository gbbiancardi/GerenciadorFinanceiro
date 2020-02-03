import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform/platform-detector.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})

export class SignInComponent implements OnInit {

    @ViewChild('userNameInput', { static: true }) userNameInput: ElementRef<HTMLInputElement>;

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

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService
    ) { }

    ngOnInit(): void {
        this.platformDetectorService.isPlatformBrowser() &&
            this.userNameInput.nativeElement.focus();
    }

    login() {

        const email = this.signInForm.get('email').value;
        const senha = this.signInForm.get('senha').value;

        this.authService
            .authenticate(email, senha)
            .subscribe(
                () => this.router.navigate(['user', email]),
                err => {
                    console.log(err);
                    this.signInForm.reset();
                    this.platformDetectorService.isPlatformBrowser() &&
                        this.userNameInput.nativeElement.focus();
                    alert('Invalid username password');
                }
            );
    }

    onSubmit() {
        // TODO: Use EventEmitter with form value
        console.warn(this.signInForm.value);
    }

    submitForm() {
        this.signInForm.getRawValue;
    }

}