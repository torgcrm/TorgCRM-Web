import {Component} from "@angular/core";
import {User} from "../../domain/User";
import {CRMLoginService} from "../../services/services.login";
import {Router} from "@angular/router";

@Component({
  templateUrl: "login.component.html",
  styleUrls: ["login.component.scss"],
})
export class CRMLoginComponent {
  private user: User = new User();

  constructor(private loginService: CRMLoginService,
              private router: Router) {}

  onSubmit(user) {
    this.loginService.authorize(user).subscribe(data => {
      localStorage.setItem("token", data['token']);
      this.router.navigate(['pages/settings/projects']);
    })
  }
}
