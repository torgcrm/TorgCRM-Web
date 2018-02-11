import {CRMMenuComponent} from "./menu.component";
import {NgModule} from "@angular/core";
import {Ng2SmartTableModule} from "ng2-smart-table";

@NgModule({
  imports: [
    Ng2SmartTableModule
  ],
  declarations: [
    CRMMenuComponent,
  ]
})
export class CRMMenuModule {}
