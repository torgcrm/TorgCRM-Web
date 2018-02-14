import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CRMFormDetails} from '../../../@torgcrm/components/CRMFormDetails';
import {News} from '../../../domain/News';
import '../../loaders/ckeditor.loader'
import 'ckeditor';
import {Category} from '../../../domain/Category';
import {CRMItemService} from '../../../services/item.service';

@Component({
  templateUrl: 'items-details.component.html',
  styleUrls: ['items-details.component.scss'],
})
export class CRMItemsDetailsComponent implements OnInit, CRMFormDetails {
  objectId: any;
  object: Category = new Category();

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private service: CRMItemService) {
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
    this.router.navigate(['pages/catalog/items']);
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
