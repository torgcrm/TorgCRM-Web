import {Component} from '@angular/core';
import {CRMLoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})
export class CRMLoginComponent {
  constructor(private loginService: CRMLoginService,
              private router: Router) {
  }

  onSubmit(user) {
    this.loginService.authorize(user).subscribe(data => {
      localStorage.setItem('token', data['token']);
      this.router.navigate(['pages/settings/projects']);
    })
  }
}
