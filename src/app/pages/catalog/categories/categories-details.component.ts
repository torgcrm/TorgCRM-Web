import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CRMFormDetails} from '../../../@torgcrm/components/CRMFormDetails';
import {News} from '../../../domain/News';
import '../../loaders/ckeditor.loader'
import 'ckeditor';
import {Category} from '../../../domain/Category';
import {CRMCategoryService} from '../../../services/category.service';

@Component({
  templateUrl: 'categories-details.component.html',
  styleUrls: ['categories-details.component.scss'],
})
export class CRMCategoriesDetailsComponent implements OnInit, CRMFormDetails {
  objectId: any;
  object: Category = new Category();

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private service: CRMCategoryService) {
  }

  onCancel(event): void {
    this.navigateToList();
  }

  onSubmit(form): void {
    this.objectId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.objectId) {
      this.service.update(form).subscribe(data => {
        this.navigateToList();
      });
    } else {
      this.service.create(form).subscribe(data => {
        this.navigateToList();
      })
    }

  }

  navigateToList(): void {
    this.router.navigate(['pages/catalog/categories']);
  }

  ngOnInit() {
    this.objectId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.objectId) {
      this.service.getById(this.objectId).subscribe((data: News) => {
        this.object = data;
      });
    }
  }
}
