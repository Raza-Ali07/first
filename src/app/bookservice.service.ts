import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError,  map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

const httpHeader = {
  headers : new HttpHeaders({'Content-Type' : 'Application/json'})
};
const apiUrl = 'http://localhost/record/wp-json/wp/v2/categories';
@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
  constructor(private http: HttpClient) { }
  private errorhandle(error:HttpErrorResponse){
    if (error.error instanceof ErrorEvent) {
      console.error('Error Message: ', error.message );
    } else {
      console.error(
        `Error Status: ${error.status}` + `Body : ${error.error}`
         );
      }
      return throwError('Check the Code and Server Respons');
    }
    private dataExtract(res: Response ) {
      const body = res;
      return body || {};
        }
    getAPIData(): Observable<any> {
      return this.http.get(apiUrl, httpHeader).pipe(
        map(this.dataExtract),
        catchError(this.errorhandle));
      }

  getAPIDataByID(id)
{
  return this.http.get('http://localhost/record/wp-json/wp/v2/categories/' +id, httpHeader).pipe(
    map(this.dataExtract),
    catchError(this.errorhandle));
}
  }
