import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`),
    });
    return next.handle(authReq).catch(err => this.handleError(err));
  }

  private handleError(err: HttpErrorResponse): Observable<any> {
    if (err.status === 403) {
      this.router.navigate(['/auth/login']);
    }
    return Observable.throw(err);
  }
}
