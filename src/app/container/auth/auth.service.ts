import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Country} from './country';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {User} from './user';
import {environment} from '../../../environments/environment.prod';
import {Register} from './register/register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(private cookiesService: CookieService, private router: Router, private http: HttpClient) {
  }

  public getCountries() {
    return this.http.get<Country[]>(environment.serverUrl + '/countries');

  }
  public register(register: Register) {
    console.log(register)
    return this.http.post(environment.serverUrl + '/users', register);
  }

  public getToken(user: User) {
    console.log(user)
    return this.http.post(environment.serverUrl + '/token', user);
  }
}
