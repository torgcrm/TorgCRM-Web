import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CRMProjectsService {
  private _url = "http://localhost:8080/api/admin/projects"
  constructor(private _http: HttpClient) {}

  getProjects() {
    return this._http.get<any>(this._url);
  }
}
