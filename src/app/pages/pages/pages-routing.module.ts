import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from '../pages.component';
import {NgModule} from '@angular/core';
import {CRMPagesComponent} from './pages.component';
import {CRMPagesDetailsComponent} from './pages-details.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'pages',
      component: CRMPagesComponent,
    },
    {
      path: 'pages/new',
      component: CRMPagesDetailsComponent,
    },
    {
      path: 'pages/details/:id',
      component: CRMPagesDetailsComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CRMPagesRoutingModule {}
