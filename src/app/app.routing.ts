import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './container/main/main.component';
import {IndexComponent} from './container/main/content/components/index/index.component';
import {AboutusComponent} from './container/main/content/components/aboutus/aboutus.component';
import {RegisterComponent} from './container/auth/register/register.component';
import {LoginComponent} from './container/auth/login/login.component';
import {ForgotPasswordComponent} from './container/auth/login/forgot-password/forgot-password.component';

// Import Containers

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      {
        path: 'index',
        component: IndexComponent
      },
      {
        path: 'aboutus',
        component: AboutusComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'forgotpassword',
    component: ForgotPasswordComponent
  },

  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  // providers: [AuthGuardService]
})
export class AppRoutingModule {
}
