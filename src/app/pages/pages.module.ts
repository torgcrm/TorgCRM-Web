import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {PagesRoutingModule} from './pages-routing.module';
import {ThemeModule} from '../@theme/theme.module';
import {CRMSettingsModule} from './settings/settings.module';
import {CRMMenuModule} from './menu/menu.module';
import {CRMLoginModule} from './login/login.module';
import {JwtInterceptor} from '../interceptors/JwtInterceptor';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CRMNewsModule} from './news/news.module';
import {CRMPagesModule} from './pages/pages.module';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    HttpClientModule,
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    CRMSettingsModule,
    CRMMenuModule,
    CRMLoginModule,
    CRMNewsModule,
    CRMPagesModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true,
    },
  ],
})
export class PagesModule {
}
