import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from '../../pages.component';
import {NgModule} from '@angular/core';
import {CRMItemsComponent} from './items.component';
import {CRMItemsDetailsComponent} from './items-details.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'catalog/items',
      component: CRMItemsComponent,
    },
    {
      path: 'catalog/items/new',
      component: CRMItemsDetailsComponent,
    },
    {
      path: 'catalog/items/details/:id',
      component: CRMItemsDetailsComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CRMItemsRoutingModule {
}
