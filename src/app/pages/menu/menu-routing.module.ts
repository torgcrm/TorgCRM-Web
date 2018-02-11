import {RouterModule, Routes} from "@angular/router";
import {PagesComponent} from "../pages.component";
import {CRMMenuComponent} from "./menu.component";
import {NgModule} from "@angular/core";

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
      component: CRMMenuComponent,
    },
    {
      path: 'menu/details/:id',
      component: CRMMenuComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(menuRoutes)],
  exports: [RouterModule]
})
export class CRMMenuRoutingModule {}
