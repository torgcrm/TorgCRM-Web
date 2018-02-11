import {Component, OnInit} from '@angular/core'
import {CRMProjectsService} from "../../../services/services.projects";
import {ActivatedRoute, Router} from "@angular/router";
import {Project} from "../../../domain/Project";

@Component({
  selector: 'crm-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  providers: [
    CRMProjectsService
  ]
})
export class CRMProjectDetailsComponent implements OnInit {
  public projectId: any;
  private project: Project = new Project();

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private projectService: CRMProjectsService) {
  }

  onSubmit(form): void {
    this.projectId = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.projectId) {
      this.projectService.update(form).subscribe(data => {
        this.navigateToProjects();
      });
    } else {
      this.projectService.create(form).subscribe(data => {
        this.navigateToProjects();
      })
    }
  }

  goToProjects(event): void {
    this.navigateToProjects();
  }

  private navigateToProjects(): void {
    this.router.navigate(['pages/settings/projects']);
  }

  ngOnInit(): void {
    this.projectId = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.projectId) {
      this.projectService.getById(this.projectId).subscribe((project: Project) => {
        this.project = project;
      });
    }
  }
}
