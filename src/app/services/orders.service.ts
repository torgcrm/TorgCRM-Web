import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CRMBasicService} from '../@torgcrm/services/CRMBasicService';

@Injectable()
export class CRMOrdersService extends CRMBasicService {
  constructor(authHttp: HttpClient) {
    super('http://localhost:8080/api/admin/orders', authHttp);
  }
}
