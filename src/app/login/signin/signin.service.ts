import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = "http://localhost:8080"

@Injectable()

export class SignInService {

    constructor(private http: HttpClient) { }

    signinEmail(email: String) {

        return this.http.get(API_URL + '/users/' + email);
    }

    login(email: String, senha: String) {
        return this.http.get(API_URL + '/users/' + email + "/" + senha);
    }

}