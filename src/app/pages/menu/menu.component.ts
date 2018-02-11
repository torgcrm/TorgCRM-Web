import {Component, OnInit} from "@angular/core";
import {LocalDataSource} from "ng2-smart-table";
import {CRMMenuService} from "../../services/services.menu";
import {Menu} from "../../domain/Menu";

@Component({
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.scss'],
})
export class CRMMenuComponent implements OnInit {
  private menuDataSource: LocalDataSource = new LocalDataSource();
  private settings = {
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
      menu: {
        title: 'Menu',
        type: 'string',
      },
      code: {
        title: 'Code',
        type: 'string',
      }
    },
  };

  constructor(private _menuService: CRMMenuService) {}

  ngOnInit() {
    this._menuService.getAll().subscribe((data: Array<Menu>) => {
      this.menuDataSource.load(data);
    })
  }
}
