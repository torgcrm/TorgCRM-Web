import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CRMFormDetails} from '../../@torgcrm/components/CRMFormDetails';
import {News} from '../../domain/News';
import '../loaders/ckeditor.loader'
import 'ckeditor';
import {CRMCustomerService} from "../../services/customer.service";

@Component({
  templateUrl: 'customers-details.component.html',
  styleUrls: [
    'customers-details.component.scss',
  ],
})
export class CRMCustomersDetailsComponent implements OnInit, CRMFormDetails {
  objectId: any;
  object: News = new News();

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private service: CRMCustomerService) {
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
