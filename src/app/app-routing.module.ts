import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {
  NbAuthComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import {CRMLoginComponent} from './pages/login/login.component';

const routes: Routes = [
  {path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule'},
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: CRMLoginComponent,
      },
      {
        path: 'login',
        component: CRMLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },
  {path: '', redirectTo: 'pages', pathMatch: 'full'},
  {path: '**', redirectTo: 'pages'},
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
