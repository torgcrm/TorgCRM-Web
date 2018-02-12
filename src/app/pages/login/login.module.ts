import {NgModule} from "@angular/core";
import {CRMLoginComponent} from "./login.component";
import {FormsModule} from "@angular/forms";
import {NbCheckboxModule} from "@nebular/theme";
import {CRMLoginService} from "../../services/login.services";

@NgModule({
  imports: [
    FormsModule,
    NbCheckboxModule
  ],
  declarations: [
    CRMLoginComponent,
  ],
  providers: [
    CRMLoginService,
  ]
})
export class CRMLoginModule {
}
