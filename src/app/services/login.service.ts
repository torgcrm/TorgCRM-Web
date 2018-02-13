import {Injectable} from '@angular/core';
import {User} from '../domain/User';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CRMLoginService {
  private _url: string = 'http://localhost:8080/api/authenticate';

  constructor(private _http: HttpClient) {}

  authorize(user: User) {
    return this._http.post(this._url, user);
  }
}
