import {Component, OnInit} from '@angular/core'
import {CRMProjectsService} from "../../../services/services.projects";
import {LocalDataSource} from "ng2-smart-table";
import {Router} from "@angular/router";
import {Project} from "../../../domain/Project";

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

  onDelete(event): void {
    this.projectService.deleteProject(event.data.id).subscribe(data => {
      this.projectsSource.remove(event.data);
    });
  }

  onEdit(event):void {
    const id = event.data.id;
    this.router.navigate(['pages/settings/projects/details', id])
  }

  onCreate(event): void {
    this.router.navigate(['pages/settings/projects/new']);
  }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((data: Array<Project>) => this.projectsSource.load(data));
  }

}
