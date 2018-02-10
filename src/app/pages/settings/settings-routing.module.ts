import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import {CRMProjectsRoutingModule} from "./projects/projects-routing.module";

@NgModule({
  imports: [CRMProjectsRoutingModule],
  exports: [RouterModule],
})
export class CRMSettingsRoutingModule {
}
