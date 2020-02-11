import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { switchMap, filter, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute, 
    private titleService: Title,
    private http : HttpClient
  ) { }

  ngOnInit(): void {
    this.router.events // Inscrito em evento de rotas
      .pipe(filter(event => event instanceof NavigationEnd)) // Se for navigation end, prosseguir
      .pipe(map(() => this.activatedRoute))
      .pipe(map(route => {
        while(route.firstChild) route = route.firstChild;
        return route;
      }))
      .pipe(switchMap(route => route.data))
      .subscribe(event => this.titleService.setTitle(event.title));
  }

  public ping() {
    this.http.get('http://localhost:8080/users/')
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      );
  }

}