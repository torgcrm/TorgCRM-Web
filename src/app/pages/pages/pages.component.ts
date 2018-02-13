import {CRMObjectList} from "../../@torgcrm/components/CRMObjectList";
import {LocalDataSource} from "ng2-smart-table";
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {News} from "../../domain/News";
import {CRMPagesService} from "../../services/pages.service";

@Component({
  templateUrl: "pages.component.html",
  styleUrls: ["pages.component.scss"],
})
export class CRMPagesComponent implements CRMObjectList, OnInit {
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
      title: {
        title: 'Title',
        type: 'string',
      },
      description: {
        title: 'Description',
        type: 'string',
      }
    },
  };

  constructor(private service: CRMPagesService,
              private router: Router) {
  }

  ngOnInit() {
    this.service.getAll().subscribe((data: Array<News>) => {
      this.dataSource.load(data);
    })
  }

  onDelete(event): void {
    this.service.delete(event.data.id).subscribe(data => {
      this.dataSource.remove(event.data);
    });
  }

  onEdit(event): void {
    const id = event.data.id;
    this.router.navigate(['pages/pages/details', id])
  }

  onCreate(event): void {
    this.router.navigate(['pages/pages/new']);
  }

}
