import {Component, OnInit} from '@angular/core';
import {Country} from '../country';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';
import {Register} from './register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', './styles.scss']
})
export class RegisterComponent implements OnInit {
  countries: Country[];
  selectedCountry = 0;
  messageColor = 'green';
  messageShow = false;
  validMessage = '';

  constructor(private modalService: NgbModal, private authService: AuthService) {
  }

  ngOnInit() {

    this.authService.getCountries().subscribe(
      data => {
        this.countries = data;
      });
  }


  openTerms(content) {
    this.modalService.open(content, {size: 'lg'});
  }

  openPrivacy(content) {
    this.modalService.open(content, {size: 'lg'});
  }

  getPhoneCode(id) {
    const selectedCountry = this.countries.find(x => x.id === id);
    return selectedCountry.phoneCode;
  }


  onRegister(f: NgForm) {

    this.cleaningUp();
    const city = f.value['city'];
    const confirmPassword = f.value['confirmPassword'];
    const firstName = f.value['firstName'];
    const lastName = f.value['lastName'];
    const password = f.value['password'];
    const email = f.value['email'];
    const phoneNumber = f.value['phoneNumber'];
    const country = f.value['country'];
    const acceptTermsCorporate = f.value['acceptTermsCorporate'];


    console.log(acceptTermsCorporate);
    if (acceptTermsCorporate) {
      if (password.length > 5) {
        if (confirmPassword === password) {
          this.authService.register(new Register(email, password, firstName, lastName, city, country, phoneNumber)).subscribe(
            data => {
              this.generatingMessage(true, 'green', data['message']);
            }, err => {
              this.generatingMessage(true, '#Fa1a1a', err.error.message);

            });
        } else {
          this.generatingMessage(true, '#Fa1a1a', 'Password and password confirmation do not match');
        }
      } else {
        this.generatingMessage(true, '#Fa1a1a', 'Password should contain at least 6 symbols');
      }
    }else {
      this.generatingMessage(true, '#Fa1a1a', 'You should accept term and conditions and Privacy Policy');
    }
  }

  generatingMessage(show: boolean, messageColor: string, text: string) {

    this.messageShow = show;
    this.validMessage = '*' + text;
    this.messageColor = messageColor;
  }

  cleaningUp() {
    this.messageShow = false;
    this.validMessage = '';
    this.messageColor = '';
  }
}
