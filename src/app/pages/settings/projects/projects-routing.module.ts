import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {CRMProjectDetailsComponent} from "./project-details.component";
import {PagesComponent} from "../../pages.component";
import {CRMProjectsComponent} from "./projects.component";

const projectRoutes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'settings/projects',
      component: CRMProjectsComponent,
    },
    {
      path: 'settings/projects/details/:id',
      component: CRMProjectDetailsComponent,
    },
    {
      path: 'settings/projects/new',
      component: CRMProjectDetailsComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(projectRoutes)],
  exports: [RouterModule],
})
export class CRMProjectsRoutingModule {
}
