import { Component, OnInit } from '@angular/core';
import { ObjetivoService } from './objetivo.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { NewObjetivo } from './new-objetivo';
import { error } from 'util';

@Component({
  selector: 'app-objetivo',
  templateUrl: './objetivo.component.html',
  styleUrls: ['./objetivo.component.css']
})
export class ObjetivoComponent implements OnInit {

  objetivoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private objetivoService: ObjetivoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.objetivoForm = this.formBuilder.group({
      descricao: ['',
        [
          Validators.required,
          Validators.maxLength(50)
        ]
      ],
      meta: ['', Validators.required],
      dataEstipulada: ['', Validators.required],
      tipoObjetivo: ['', Validators.required]
    });
  }

  objetivoUsuario() {

    const newObjetivo = this.objetivoForm.getRawValue() as NewObjetivo;

    this.objetivoService
      .addObjetivo(newObjetivo)
      .subscribe(
        () => this.router.navigate(['dashboard']),
        err => console.log(error)
      );
  }

}
