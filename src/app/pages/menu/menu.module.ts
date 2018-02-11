import {CRMMenuComponent} from "./menu.component";
import {NgModule} from "@angular/core";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {CRMMenuService} from "../../services/services.menu";

@NgModule({
  imports: [
    Ng2SmartTableModule
  ],
  declarations: [
    CRMMenuComponent,
  ],
  providers: [
    CRMMenuService,
  ]
})
export class CRMMenuModule {}
