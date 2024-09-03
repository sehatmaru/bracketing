import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse, HttpEvent, HttpResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { StatusCode } from '../enum/status-code.enum';
import { HandlerResponseService } from '../service/handler-response.service';

@Injectable()
export class CommonInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private handlerResponseService: HandlerResponseService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(next);
    
    return next.handle(request).pipe(
      tap(event => {
        if (event instanceof HttpResponse && event.body.statusCode !== StatusCode.SUCCESS) {
          this.handlerResponseService.failedResponse(event.body)
        }
      })
    );
  }
}
