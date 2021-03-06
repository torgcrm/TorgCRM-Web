import {NgModule} from '@angular/core';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {ThemeModule} from '../../../@theme/theme.module';
import {CKEditorModule} from 'ng2-ckeditor';
import {CRMCategoriesComponent} from './categories.component';
import {CRMCategoriesDetailsComponent} from './categories-details.component';
import {CRMCategoryService} from '../../../services/category.service';

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
    CRMCategoryService,
  ],
})
export class CRMCategoriesModule {}
