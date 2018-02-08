import {Component, OnInit} from '@angular/core'
import {CRMProjectsService} from "../../services/services.projects";
import {LocalDataSource, Ng2SmartTableModule} from "ng2-smart-table";

@Component({
  selector: 'crm-projects',
  templateUrl: './projects.component.html',
  providers: [
    CRMProjectsService
  ]
})
export class CRMProjectsComponent implements OnInit {
  projectsSource: LocalDataSource = new LocalDataSource();
  settings: {};

  constructor(private projectService: CRMProjectsService) {
    this.projectService = projectService;
    this.settings = {
      columns: {
        id: {
          title: 'ID'
        },
        domain: {
          title: 'Domain'
        },
        template: {
          title: 'Template'
        }
      }
    };
  }

  ngOnInit(): void {
    this.projectService.getProjects()
      .subscribe(data => this.projectsSource.load(data));
  }

}
