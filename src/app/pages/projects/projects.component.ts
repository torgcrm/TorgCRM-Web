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
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      domain: {
        title: 'Domain',
        type: 'string',
      },
      template: {
        title: 'Template',
        type: 'string',
      }
    },
  };

  constructor(private projectService: CRMProjectsService) {
    this.projectService = projectService;
  }

  ngOnInit(): void {
    this.projectService.getProjects()
      .subscribe(data => this.projectsSource.load(data));
  }

}
