import {NgModule} from '@angular/core';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {ThemeModule} from '../../@theme/theme.module';
import {CRMOrdersComponent} from './orders.component';
import {CRMOrdersDetailsComponent} from './orders-details.component';
import {CKEditorModule} from 'ng2-ckeditor';
import {CRMOrdersService} from '../../services/orders.service';

@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    CKEditorModule,
  ],
  declarations: [
    CRMOrdersComponent,
    CRMOrdersDetailsComponent,
  ],
  providers: [
    CRMOrdersService,
  ],
})
export class CRMOrdersModule {
}
