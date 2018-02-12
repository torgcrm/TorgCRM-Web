import {RouterModule, Routes} from "@angular/router";
import {PagesComponent} from "../pages.component";
import {CRMMenuComponent} from "./menu.component";
import {NgModule} from "@angular/core";
import {CRMMenuDetailsComponent} from "./menu-details.component";

const menuRoutes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'menu',
      component: CRMMenuComponent,
    },
    {
      path: 'menu/new',
      component: CRMMenuDetailsComponent,
    },
    {
      path: 'menu/details/:id',
      component: CRMMenuDetailsComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(menuRoutes)],
  exports: [RouterModule],
})
export class CRMMenuRoutingModule {}
