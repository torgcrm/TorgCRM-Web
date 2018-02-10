import {Component, OnInit} from '@angular/core'
import {CRMProjectsService} from "../../../services/services.projects";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'crm-project-details',
  templateUrl: './project-details.component.html',
  providers: [
    CRMProjectsService
  ]
})
export class CRMProjectDetailsComponent implements OnInit {
  public projectId: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get("id");
  }
}
