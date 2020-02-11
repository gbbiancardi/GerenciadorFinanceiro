import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewUser } from './new-user';
import { environment } from 'src/environments/environment';

const API_URL = "http://localhost:8080"

@Injectable()

export class SignUpService {

    constructor(private http: HttpClient) { }

    checkUserNameTaken(email: string) {

        return this.http.get(API_URL + environment.BASE_URL + '/users' + email);
    }

    signup(newUser: NewUser) {
        
        return this.http.post(API_URL  + '/users', newUser);
    }
}