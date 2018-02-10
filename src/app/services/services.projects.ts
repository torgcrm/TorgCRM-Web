import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Project} from "../domain/Project";

@Injectable()
export class CRMProjectsService {
  private _url = "http://localhost:8080/api/admin/projects";

  constructor(private _http: HttpClient) {
  }

  getProjects() {
    return this._http.get(this._url);
  }

  updateProject(project: Project) {
    return this._http.post(this._url, project);
  }

  saveProject(project: Project) {
    return this._http.put(this._url, project);
  }

  deleteProject(projectId: number) {
    const deleteUrl = `${this._url}/${projectId}`;
    return this._http.delete(deleteUrl);
  }

  getProjectById(projectId: number) {
    const url = `${this._url}/details/${projectId}`;
    return this._http.get(url);
  }
}
