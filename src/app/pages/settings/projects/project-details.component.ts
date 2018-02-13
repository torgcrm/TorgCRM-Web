import {Component, OnInit} from '@angular/core'
import {CRMProjectsService} from "../../../services/projects.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Project} from "../../../domain/Project";
import {CRMFormDetails} from "../../../@torgcrm/components/CRMFormDetails";

@Component({
  selector: 'crm-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class CRMProjectDetailsComponent implements OnInit, CRMFormDetails {
  objectId: any;
  object: Project = new Project();

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private projectService: CRMProjectsService) {
  }

  onSubmit(form): void {
    this.objectId = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.objectId) {
      this.projectService.update(form).subscribe(data => {
        this.navigateToList();
      });
    } else {
      this.projectService.create(form).subscribe(data => {
        this.navigateToList();
      })
    }
  }

  onCancel(event): void {
    this.navigateToList();
  }

  navigateToList(): void {
    this.router.navigate(['pages/settings/projects']);
  }

  ngOnInit(): void {
    this.objectId = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.objectId) {
      this.projectService.getById(this.objectId).subscribe((data: Project) => {
        this.object = data;
      });
    }
  }
}
