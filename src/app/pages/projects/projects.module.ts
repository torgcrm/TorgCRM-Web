import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { CRMProjectsComponent } from './projects.component';


@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    CRMProjectsComponent,
  ],
})
export class CRMProjectsModule { }
