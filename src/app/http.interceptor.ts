import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorClass implements HttpInterceptor {
  private requests: HttpRequest<any>[] = [];
  httpErrorCode: string;
  httpErrorMsg: string;
  httpMessage: string;

  constructor() {}

  removeRequest(req: HttpRequest<any>) {
    const i = this.requests.indexOf(req);
    if (i >= 0) {
      this.requests.splice(i, 1);
    }
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.requests.push(req);
    console.log('No of requests--->' + this.requests.length);
    return Observable.create((observer) => {
      const subscription = next.handle(req).subscribe(
        (event) => {
          if (event instanceof HttpResponse) {
            this.removeRequest(req);
            observer.next(event);
          }
        },
        (err) => {
          this.httpErrorCode = err.error.status;
          this.httpErrorMsg = err.error.error;
          this.httpMessage = err.message;

          this.removeRequest(req);
          observer.error(err);
        },
        () => {
          this.removeRequest(req);
          observer.complete();
        }
      );
      // remove request from queue when cancelled
      return () => {
        console.log('cancelling observable--->');
        this.removeRequest(req);
        subscription.unsubscribe();
      };
    });
  }
}
