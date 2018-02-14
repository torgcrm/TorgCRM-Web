import {NgModule} from '@angular/core';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {ThemeModule} from '../../@theme/theme.module';
import {CKEditorModule} from 'ng2-ckeditor';
import {CRMCustomersDetailsComponent} from './customers-details.component';
import {CRMCustomersComponent} from './customers.component';
import {CRMCustomerService} from '../../services/customer.service';

@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    CKEditorModule,
  ],
  declarations: [
    CRMCustomersComponent,
    CRMCustomersDetailsComponent,
  ],
  providers: [
    CRMCustomerService,
  ],
})
export class CRMCustomersModule {}
