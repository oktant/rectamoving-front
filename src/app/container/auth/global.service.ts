import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ClientToken} from './client-token';
import {environment} from '../../../environments/environment.prod';

@Injectable()
export class GlobalService {

  constructor(private cookiesService: CookieService, private router: Router, private http: HttpClient) {
  }


  public setLocalToken(tokens: ClientToken) {

    this.cookiesService.set('accessToken', tokens.accessToken);
  }

  public getLocalToken() {

    if (this.cookiesService.get('accessToken') != null) {
      return this.cookiesService.get('accessToken');
    }
    this.router.navigateByUrl('/');
  }

  public isAuthenticated() {
    return this.http.post(environment + '/auth/status', this.cookiesService.get('accessToken') );
  }
  public cleanCookies() {
    this.cookiesService.delete('accessToken', 'localhost');
    this.router.navigateByUrl('/login');
  }
}
