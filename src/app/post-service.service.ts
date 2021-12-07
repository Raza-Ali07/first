import { Injectable } from '@angular/core';
import { Observable,  throwError} from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
 import { catchError,  map } from 'rxjs/operators';
const httpHeader = {
  headers : new HttpHeaders({'Content-Type' : 'Application/json'})
};
const apiUrl = 'http://localhost/record/wp-json/wp/v2/posts?per_page=100';
@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
public id: any;
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
// getAPIDataByID(id): Observable<any> 
// {
//   return this.http.get('http://localhost/record/wp-json/wp/v2/posts/' +id , httpHeader).pipe(
//     map(this.dataExtract),
//     catchError(this.errorhandle));
// }
getOne(id)
{
  return this.http.get('http://localhost/record/wp-json/wp/v2/posts/' +id, httpHeader).pipe(
    map(this.dataExtract),
    catchError(this.errorhandle));
}

  }
