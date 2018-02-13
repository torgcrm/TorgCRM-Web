import {NgModule} from '@angular/core';

import {ThemeModule} from '../../../@theme/theme.module';
import {CRMProjectsComponent} from './projects.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {CRMProjectDetailsComponent} from './project-details.component';
import {FormsModule} from '@angular/forms';
import {CRMProjectsService} from '../../../services/projects.service';

@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    FormsModule,
  ],
  declarations: [
    CRMProjectsComponent,
    CRMProjectDetailsComponent,
  ],
  providers: [
    CRMProjectsService,
  ],
})
export class CRMProjectsModule {
}
