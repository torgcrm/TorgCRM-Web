import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CRMSettingsRoutingModule} from "./settings/settings-routing.module";
import {CRMMenuRoutingModule} from "./menu/menu-routing.module";
import {CRMNewsRoutingModule} from "./news/news-routing.module";
import {CRMPagesRoutingModule} from "./pages/pages-routing.module";

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
  ],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CRMSettingsRoutingModule,
    CRMMenuRoutingModule,
    CRMNewsRoutingModule,
    CRMPagesRoutingModule,
  ],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
