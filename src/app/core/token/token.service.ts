import { Injectable } from '@angular/core';

const KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBUEkgZG8gRm9ydW0gZGEgQWx1cmEiLCJzdWIiOiIxIiwiaWF0IjoxNTczNDk3NTU0LCJleHAiOjE1NzM1ODM5NTR9.Lm0HSm12LWETWqXjyKM_C2TRLTuNghAu9bTn5deUsrE';

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