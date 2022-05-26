import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class CacheInterceptorService implements HttpInterceptor {

  private cache: Map<string, HttpResponse<any>> = new Map();

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // only intercept get methods
    if (req.method !== 'GET')
      return next.handle(req);

    // check if reload is required
    if (req.headers.get('reload') === 'true')
      this.cache.delete(req.url);

    // read cached response
    const cached = this.cache.get(req.url);
    if (cached)
      // return cached response
      return of(cached.clone());

    // load request
    return next.handle(req)
      .pipe(
        // save response to cache
        tap((httpEvent) => {
          if (httpEvent instanceof HttpResponse)
            this.cache.set(req.url, httpEvent.clone());
        })
      );
  }
}
