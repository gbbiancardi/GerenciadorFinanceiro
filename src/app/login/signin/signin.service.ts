import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = "http://localhost:8080"

@Injectable()

export class SignInService {

    constructor(private http: HttpClient) { }

    signin(email: String) {
        
        return this.http.get(API_URL + '/api/users/' + email);
    }
}