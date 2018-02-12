import {Component, OnInit} from "@angular/core";
import {LocalDataSource} from "ng2-smart-table";
import {CRMMenuService} from "../../services/menu.services";
import {Menu} from "../../domain/Menu";
import {Router} from "@angular/router";
import {CRMObjectList} from "../../@torgcrm/components/CRMObjectList";

@Component({
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.scss'],
})
export class CRMMenuComponent implements OnInit, CRMObjectList {
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
      code: {
        title: 'Code',
        type: 'string',
      }
    },
  };

  constructor(private menuService: CRMMenuService,
              private router: Router) {
  }

  ngOnInit() {
    this.menuService.getAll().subscribe((data: Array<Menu>) => {
      this.dataSource.load(data);
    })
  }

  onDelete(event): void {
    this.menuService.delete(event.data.id).subscribe(data => {
      this.dataSource.remove(event.data);
    });
  }

  onEdit(event): void {
    const id = event.data.id;
    this.router.navigate(['pages/menu/details', id])
  }

  onCreate(event): void {
    this.router.navigate(['pages/menu/new']);
  }

}
