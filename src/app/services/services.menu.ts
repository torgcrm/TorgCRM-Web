import {Injectable} from "@angular/core";
import {CRMBasicService} from "./services.basic";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CRMMenuService extends CRMBasicService {
  constructor(private http: HttpClient) {
    super("http://localhost:8080/api/admin/menu", http);
  }
}
