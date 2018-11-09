import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AppConfigData } from '../app.config';
/**
 * A General service to consume RESTful APIs services
 */

@Injectable({
  providedIn: 'root'
})
export class HttpService {

constructor(private http: HttpClient) {}

public get(uri: string): Observable<any> {
      return this.http.get( AppConfigData.appEndPoint + uri ).pipe(map((response: Response) => response));
}

public post(uri: string, data: any): Observable<any> {
        return this.http.post( AppConfigData.appEndPoint + uri, data ).pipe(map((response: Response) => response));
}

public put(uri: string, data: any): Observable<any> {
  return this.http.put( AppConfigData.appEndPoint + uri, data ).pipe(map((response: Response) => response));
}

public delete(uri: string): Observable<any> {
  return this.http.delete( AppConfigData.appEndPoint + uri ).pipe(map((response: Response) => response));
}

}
