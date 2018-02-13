import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {CRMFormDetails} from "../../@torgcrm/components/CRMFormDetails";
import {News} from "../../domain/News";
import "../loaders/ckeditor.loader"
import 'ckeditor';
import {CRMPagesService} from "../../services/pages.service";

@Component({
  templateUrl: 'pages-details.component.html',
  styleUrls: ['pages-details.component.scss']
})
export class CRMPagesDetailsComponent implements OnInit, CRMFormDetails {
  objectId: any;
  object: News = new News();

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private service: CRMPagesService) {
  }

  onCancel(event): void {
    this.navigateToList();
  }

  onSubmit(form): void {
    this.objectId = this.activatedRoute.snapshot.paramMap.get("id");
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
    this.router.navigate(['pages/pages']);
  }

  ngOnInit() {
    this.objectId = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.objectId) {
      this.service.getById(this.objectId).subscribe((data: News) => {
        this.object = data;
      });
    }
  }
}
