import { HttpClient } from '@angular/common/http'
//import { Http } from '@angular/http'
import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'


@Injectable()
export class AuthService {

    messages = []
    path = environment.path

    TOKEN_KEY = 'token'

    constructor( private http: HttpClient) {}

    get token() {
        return localStorage.getItem(this.TOKEN_KEY)
    }

    get isAuthenticated() {
        return !!localStorage.getItem(this.TOKEN_KEY)
    }

    logout() {
        localStorage.removeItem(this.TOKEN_KEY)
    }

    registerUser(registerData) {
        return this.http.post<any>(this.path + '/register', registerData)
        // .subscribe(res => {
        //     this.saveToken(res.json().token)
        // })
    }    
    
    loginUser(loginData) {
        return this.http.post<any>(this.path + '/login', loginData)
        // .subscribe(res => {
        //     console.log(res.json().token)
        //     this.saveToken(res.json().token)
        // })
    }

    saveToken(token) {
        localStorage.setItem(this.TOKEN_KEY, token)
    }
}
