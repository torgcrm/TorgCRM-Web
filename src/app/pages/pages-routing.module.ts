import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CRMSettingsRoutingModule} from './settings/settings-routing.module';
import {CRMMenuRoutingModule} from './menu/menu-routing.module';
import {CRMNewsRoutingModule} from './news/news-routing.module';
import {CRMPagesRoutingModule} from './pages/pages-routing.module';
import {CRMCategoriesRoutingModule} from './catalog/categories/categories-routing.module';
import {CRMItemsRoutingModule} from './catalog/items/items-routing.module';
import {CRMCustomersRoutingModule} from './customers/customers-routing.module';
import {CRMOrdersRoutingModule} from './orders/orders-routing.module';

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
    CRMCategoriesRoutingModule,
    CRMItemsRoutingModule,
    CRMCustomersRoutingModule,
    CRMOrdersRoutingModule,
  ],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
