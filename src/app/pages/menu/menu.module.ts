import {CRMMenuComponent} from './menu.component';
import {NgModule} from '@angular/core';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {CRMMenuService} from '../../services/menu.service';
import {CRMMenuDetailsComponent} from './menu-details.component';
import {ThemeModule} from '../../@theme/theme.module';

@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    CRMMenuComponent,
    CRMMenuDetailsComponent,
  ],
  providers: [
    CRMMenuService,
  ],
})
export class CRMMenuModule {}
