import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../user';
import {ClientToken} from '../client-token';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {GlobalService} from '../global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './styles.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginHttpService: AuthService, private router: Router, private globalService: GlobalService) { }
  validUsername: boolean;
  validUsernameMessage: '';

  ngOnInit() {
  }


  onSignIn(f: NgForm) {
    console.log(f.value);
    if (f !== undefined && f.value !== undefined) {

      const username = f.value['username'];
      const password = f.value['password'];
      if (username !== undefined && password !== undefined) {
        const user = new User(username, password);
        this.loginHttpService.getToken(user).subscribe(
          (data: ClientToken) => {
            console.log(data)

            if ((data.accessToken) !== undefined) {
              this.router.navigate(['/index']);
            }
          }, err => {
            this.validUsername = true;
            this.validUsernameMessage = err.error.message;
          }
        );
      }
    }
  }


}
