import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing';

import {MainComponent} from './container/main/main.component';
import {AppTopComponent} from './container/main/content/app-top/app-top.component';
import {AppFooterComponent} from './container/main/content/app-footer/app-footer.component';
import {AboutusComponent} from './container/main/content/components/aboutus/aboutus.component';
import {IndexComponent} from './container/main/content/components/index/index.component';
import {AuthComponent} from './container/auth/auth.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TabsComponent } from './container/helper/tabs/tabs.component';
import { TabComponent } from './container/helper/tab/tab.component';


import { NgSelectModule } from '@ng-select/ng-select';
import {CookieService} from 'ngx-cookie-service';
import {GlobalService} from './container/auth/global.service';
import { RegisterComponent } from './container/auth/register/register.component';
import { LoginComponent } from './container/auth/login/login.component';
import { ForgotPasswordComponent } from './container/auth/login/forgot-password/forgot-password.component';




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AppTopComponent,
    AppFooterComponent,
    AboutusComponent,
    IndexComponent,
    AuthComponent,
:    TabsComponent,
    TabComponent,

    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgbModule,
    NgSelectModule
  ],

  providers: [
    GlobalService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
