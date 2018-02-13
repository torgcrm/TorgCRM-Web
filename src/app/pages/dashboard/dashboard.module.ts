import {NgModule} from '@angular/core';

import {ThemeModule} from '../../@theme/theme.module';
import {DashboardComponent} from './dashboard.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {NgxEchartsModule} from 'ngx-echarts';
import {EchartsBarComponent} from './echarts-bar.component';
import {EchartsPieComponent} from './echarts-pie.component';


@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    NgxChartsModule,
  ],
  declarations: [
    DashboardComponent,
    EchartsBarComponent,
    EchartsPieComponent,
  ],
})
export class DashboardModule {
}
