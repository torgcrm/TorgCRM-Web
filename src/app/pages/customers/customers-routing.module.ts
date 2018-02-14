import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from '../pages.component';
import {NgModule} from '@angular/core';
import {CRMCustomersComponent} from './customers.component';
import {CRMCustomersDetailsComponent} from './customers-details.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'customers',
      component: CRMCustomersComponent,
    },
    {
      path: 'customers/new',
      component: CRMCustomersDetailsComponent,
    },
    {
      path: 'customers/details/:id',
      component: CRMCustomersDetailsComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CRMCustomersRoutingModule {}
