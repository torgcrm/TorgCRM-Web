import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from '../pages.component';
import {NgModule} from '@angular/core';
import {CRMCategoriesComponent} from './pages.component';
import {CRMCategoriesDetailsComponent} from './pages-details.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'pages',
      component: CRMCategoriesComponent,
    },
    {
      path: 'pages/new',
      component: CRMCategoriesDetailsComponent,
    },
    {
      path: 'pages/details/:id',
      component: CRMCategoriesDetailsComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CRMCategoriesRoutingModule {}
