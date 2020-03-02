import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewEmail } from './new-email';

const API_URL = "http://localhost:8080"

@Injectable()

export class SuporteService {

    constructor(private http: HttpClient) { }

    sentEmail(newEmail: NewEmail) {
        
        return this.http.post(API_URL + '/email', newEmail);
    }
}