import {NgModule} from '@angular/core';

import {ThemeModule} from '../../../@theme/theme.module';
import {CRMProjectsComponent} from './projects.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {CRMProjectDetailsComponent} from "./project-details.component";

@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule
  ],
  declarations: [
    CRMProjectsComponent,
    CRMProjectDetailsComponent,
  ],
})
export class CRMProjectsModule {
}
