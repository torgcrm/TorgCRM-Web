import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Project} from "../domain/Project";

@Injectable()
export class CRMProjectsService {
  private _url = "http://localhost:8080/api/admin/projects";
  private _urlDetails = "http://localhost:8080/api/admin/projects/details/";

  constructor(private _http: HttpClient) {}

  getProjects() {
    return this._http.get<Project>(this._url);
  }

  saveProject(project: Project) {
    return this._http.post<Project>(this._url, project);
  }

  getProjectById(projectId: number) {
    return this._http.get<Project>(this._urlDetails + projectId);
  }
}
