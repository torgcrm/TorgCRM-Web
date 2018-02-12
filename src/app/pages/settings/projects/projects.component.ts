import {Component, OnInit} from '@angular/core'
import {CRMProjectsService} from "../../../services/projects.services";
import {LocalDataSource} from "ng2-smart-table";
import {Router} from "@angular/router";
import {Project} from "../../../domain/Project";
import {CRMObjectList} from "../../../@torgcrm/components/CRMObjectList";

@Component({
  selector: 'crm-projects',
  templateUrl: './projects.component.html',
})
export class CRMProjectsComponent implements OnInit, CRMObjectList {
  dataSource: LocalDataSource = new LocalDataSource();
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
    this.projectService.delete(event.data.id).subscribe(data => {
      this.dataSource.remove(event.data);
    });
  }

  onEdit(event): void {
    const id = event.data.id;
    this.router.navigate(['pages/settings/projects/details', id])
  }

  onCreate(event): void {
    this.router.navigate(['pages/settings/projects/new']);
  }

  ngOnInit(): void {
    this.projectService.getAll().subscribe((data: Array<Project>) => this.dataSource.load(data));
  }

}
