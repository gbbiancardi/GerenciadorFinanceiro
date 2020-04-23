import { Injectable } from '@angular/core';

const KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTM0NTU2IiwibmFtZSI6IkFQSSBkbyBNb25leWdlciIsImlhdCI6MTUxNjIzOTAyMn0.hlD9-fYQJT62aKPq_DA8KNEOc2E0RWP-3qynDO5PEyY';

@Injectable({
    providedIn: 'root'
})

export class TokenService {

    hasToken() {
        return !!this.getToken();
    }

    setToken(token) {
        window.localStorage.setItem(KEY, token);
    }

    getToken() {
        return window.localStorage.getItem(KEY);
    }

    removeToken() {
        window.localStorage.removeItem(KEY);
    }
 }