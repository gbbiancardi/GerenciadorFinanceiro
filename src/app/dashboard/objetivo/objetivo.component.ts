import { Component, OnInit } from '@angular/core';
import { ObjetivoService } from './objetivo.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform/platform-detector.service';

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
    private router: Router,
    private platformDetectorService: PlatformDetectorService
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

  // signup() {

  //   const newUser = this.objetivoService.getRawValue() as NewUser;
  //   this.objetivoService
  //     .signup(newUser)
  //     .subscribe(
  //       () => this.router.navigate(['login']),
  //       err => console.log(error)
  //     );
  // }

}
