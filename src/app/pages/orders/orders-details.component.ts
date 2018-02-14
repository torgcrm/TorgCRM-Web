import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CRMFormDetails} from '../../@torgcrm/components/CRMFormDetails';
import {News} from '../../domain/News';
import '../loaders/ckeditor.loader'
import 'ckeditor';
import {CRMOrdersService} from "../../services/orders.service";

@Component({
  templateUrl: 'orders-details.component.html',
  styleUrls: [
    'orders-details.component.scss',
  ],
})
export class CRMOrdersDetailsComponent implements OnInit, CRMFormDetails {
  objectId: any;
  object: News = new News();

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private service: CRMOrdersService) {
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
    this.router.navigate(['pages/news']);
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
