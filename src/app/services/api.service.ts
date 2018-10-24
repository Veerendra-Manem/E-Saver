import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'

@Injectable()
export class ApiService {
    messages = []
    users = []
    path = environment.path

    constructor( private http: HttpClient) {}

    getUserProfile() {
        return this.http.get<any>(this.path + '/profile' )
    }

    getProfileMessages() {
        return this.http.get<any>(this.path + '/profile/posts' )
    }

    getProfileTodayMessages() {
        return this.http.get<any>(this.path + '/profile/todayposts' )
    }

    postMessage(message) {
        this.http.post(this.path + '/post', message).subscribe((data) => {
            console.log('got valid: ', data);            
          },
          (err)=> {            
            console.log('got error: ', err.message);            
          }
        );
    }

    getMessages(userId) {
        return this.http.get<any>(this.path + '/posts/' + userId)
    }

    getUsers() {
        return this.http.get<any>(this.path + '/users');
    }

    getProfile(id) {
        return this.http.get(this.path + '/profile/' + id)
    }
    
    createPledge(pledge) {
        return this.http.post(this.path + '/createpledge', pledge)
    }
}