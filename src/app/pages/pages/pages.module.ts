import {NgModule} from '@angular/core';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {ThemeModule} from '../../@theme/theme.module';
import {CRMPagesComponent} from './pages.component';
import {CRMPagesDetailsComponent} from './pages-details.component';
import {CKEditorModule} from 'ng2-ckeditor';
import {CRMPagesService} from '../../services/pages.service';

@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    CKEditorModule,
  ],
  declarations: [
    CRMPagesComponent,
    CRMPagesDetailsComponent,
  ],
  providers: [
    CRMPagesService,
  ],
})
export class CRMPagesModule {}
