import {NgModule} from "@angular/core";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {ThemeModule} from "../../@theme/theme.module";
import {CRMNewsComponent} from "./news.component";
import {CRMNewsDetailsComponent} from "./news-details.component";
import {CRMNewsService} from "../../services/news.service";
import {CKEditorModule} from "ng2-ckeditor";

@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    CKEditorModule,
  ],
  declarations: [
    CRMNewsComponent,
    CRMNewsDetailsComponent,
  ],
  providers: [
    CRMNewsService,
  ]
})
export class CRMNewsModule {}
