import {Component, OnInit} from '@angular/core';
import {Menu} from '../../domain/Menu';
import {ActivatedRoute, Router} from '@angular/router';
import {CRMFormDetails} from '../../@torgcrm/components/CRMFormDetails';
import {CRMMenuService} from '../../services/menu.service';

@Component({
  templateUrl: 'menu-details.component.html',
  styleUrls: [
    'menu-details.component.scss',
  ],
})
export class CRMMenuDetailsComponent implements OnInit, CRMFormDetails {
  objectId: any;
  object: Menu = new Menu();

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private menuService: CRMMenuService) {
  }

  onCancel(event): void {
    this.navigateToList();
  }

  onSubmit(form): void {
    this.objectId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.objectId) {
      this.menuService.update(form).subscribe(data => {
        this.navigateToList();
      });
    } else {
      this.menuService.create(form).subscribe(data => {
        this.navigateToList();
      })
    }

  }

  navigateToList(): void {
    this.router.navigate(['pages/menu']);
  }

  ngOnInit() {
    this.objectId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.objectId) {
      this.menuService.getById(this.objectId).subscribe((data: Menu) => {
        this.object = data;
      });
    }
  }
}
