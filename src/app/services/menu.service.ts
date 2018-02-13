import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CRMBasicService} from "../@torgcrm/services/CRMBasicService";

@Injectable()
export class CRMMenuService extends CRMBasicService {
  constructor(private authHttp: HttpClient) {
    super("http://localhost:8080/api/admin/menu", authHttp);
  }
}
