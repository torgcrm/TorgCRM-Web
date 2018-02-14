import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from '../pages.component';
import {NgModule} from '@angular/core';
import {CRMOrdersComponent} from './orders.component';
import {CRMOrdersDetailsComponent} from './orders-details.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'orders',
      component: CRMOrdersComponent,
    },
    {
      path: 'orders/new',
      component: CRMOrdersDetailsComponent,
    },
    {
      path: 'orders/details/:id',
      component: CRMOrdersDetailsComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CRMOrdersRoutingModule {
}
