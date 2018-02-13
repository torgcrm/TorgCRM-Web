import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from '../../pages.component';
import {NgModule} from '@angular/core';
import {CRMCategoriesComponent} from './items.component';
import {CRMCategoriesDetailsComponent} from './items-details.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'catalog/categories',
      component: CRMCategoriesComponent,
    },
    {
      path: 'catalog/categories/new',
      component: CRMCategoriesDetailsComponent,
    },
    {
      path: 'catalog/categories/details/:id',
      component: CRMCategoriesDetailsComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CRMCategoriesRoutingModule {}
