import {CRMObjectList} from '../../../@torgcrm/components/CRMObjectList';
import {LocalDataSource} from 'ng2-smart-table';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {News} from '../../../domain/News';
import {CRMCategoryService} from '../../../services/category.service';

@Component({
  templateUrl: 'categories.component.html',
  styleUrls: [
    'categories.component.scss',
  ],
})
export class CRMCategoriesComponent implements CRMObjectList, OnInit {
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
      columnTitle: 'Actions',
    },
    columns: {
      title: {
        title: 'Category name',
        type: 'string',
      },
      slug: {
        title: 'Code',
        type: 'string',
      },
    },
  };

  constructor(private service: CRMCategoryService,
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
    this.router.navigate(['pages/catalog/categories/details', id])
  }

  onCreate(event): void {
    this.router.navigate(['pages/catalog/categories/new']);
  }

}
