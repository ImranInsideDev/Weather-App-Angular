import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
let jsonConvorter = (res: any) => {
  return res || {}
}

let errorHandler = (err: HttpErrorResponse) => {
  return err.error
}

@Injectable({
  providedIn: 'root'
})
export class HttpAjaxService {

  constructor(
    private http: HttpClient
  ) { }

  httpGetWithJson = (api: string): Observable<any> => {
    return this.http.get(api)
      .pipe(
        map(jsonConvorter),
        catchError(errorHandler))
  }
}
