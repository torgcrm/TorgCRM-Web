import {Component, OnInit} from '@angular/core'
import {CRMProjectsService} from "../../../services/services.projects";
import {LocalDataSource} from "ng2-smart-table";
import {Router} from "@angular/router";

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
    mode: 'external',
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: false,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    actions: {
      position: 'right',
      columnTitle: 'Actions'
    },
    columns: {
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

  constructor(private projectService: CRMProjectsService,
              private router: Router) {
    this.projectService = projectService;
  }

  onEdit(event):void {
    // this.projectService.saveProject(event.newData).subscribe(data => {
    //   this.projectsSource.update(event.data, data);
    // });
    // this.projectsSource.refresh();
  }

  onDeleteConfirm(event): void {
    alert(1);
  }

  onRowSelect(event):void {
    this.router.navigate(['pages/settings/projects/details', event.data.id])
  }

  ngOnInit(): void {
    this.projectService.getProjects()
      .subscribe(data => this.projectsSource.load(data));
  }

}
