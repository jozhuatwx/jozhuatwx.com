import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(private httpClient: HttpClient) { }

  get<T>(source: string, reload = false): Observable<T> {
    return this.httpClient.get<T>(source, { headers: { 'reload': reload.toString() } });
  }

  getData<T>(source: string, reload = false): Observable<T> {
    return this.httpClient.get<T>(`${environment.apiDataUrl}/${source}`, { headers: { 'reload': reload.toString() } });
  }
}
