import {NgModule} from '@angular/core';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {ThemeModule} from '../../../@theme/theme.module';
import {CKEditorModule} from 'ng2-ckeditor';
import {CRMItemsComponent} from './items.component';
import {CRMItemsDetailsComponent} from './items-details.component';
import {CRMItemService} from '../../../services/item.service';

@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    CKEditorModule,
  ],
  declarations: [
    CRMItemsComponent,
    CRMItemsDetailsComponent,
  ],
  providers: [
    CRMItemService,
  ],
})
export class CRMItemsModule {
}
