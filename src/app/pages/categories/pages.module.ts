import {NgModule} from '@angular/core';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {ThemeModule} from '../../@theme/theme.module';
import {CKEditorModule} from 'ng2-ckeditor';
import {CRMPagesService} from '../../services/pages.service';
import {CRMCategoriesComponent} from './pages.component';
import {CRMCategoriesDetailsComponent} from './pages-details.component';

@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    CKEditorModule,
  ],
  declarations: [
    CRMCategoriesComponent,
    CRMCategoriesDetailsComponent,
  ],
  providers: [
    CRMPagesService,
  ],
})
export class CRMCategoriesModule {}
