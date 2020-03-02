import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SuporteService } from './suporte.service';
import { NewEmail } from './new-email';
import { error } from 'util';

@Component({
  selector: 'app-suporte',
  templateUrl: './suporte.component.html',
  styleUrls: ['./suporte.component.css']
})
export class SuporteComponent implements OnInit {

  suporteForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private suporteService: SuporteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.suporteForm = this.formBuilder.group({
      assunto: ['', Validators.required],
      titulo: ['', Validators.required],
      mensagem: ['', 
        [
          Validators.required,
          Validators.maxLength(255)
        ]
      ]
    });
  }

  enviarEmail() {

    const newEmail = this.suporteForm.getRawValue() as NewEmail;

    this.suporteService
      .sentEmail(newEmail)
      .subscribe(
        () => this.router.navigate(['dashboard']),
        err => console.log(error)
      );
  }

}
