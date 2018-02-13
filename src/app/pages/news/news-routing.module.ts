import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from '../pages.component';
import {NgModule} from '@angular/core';
import {CRMNewsComponent} from './news.component';
import {CRMNewsDetailsComponent} from './news-details.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'news',
      component: CRMNewsComponent,
    },
    {
      path: 'news/new',
      component: CRMNewsDetailsComponent,
    },
    {
      path: 'news/details/:id',
      component: CRMNewsDetailsComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CRMNewsRoutingModule {}
