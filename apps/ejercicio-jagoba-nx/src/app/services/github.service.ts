import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {catchError} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class GithubService {
  constructor(private http: HttpClient) { }


  getQuery(query: string) {
    const url = `https://api.github.com/repos/${query}`;

    /* eslint-disable  @typescript-eslint/no-explicit-any */
    return this.http.get<any>(url);
  }

  getIssues(usuario: string, repositorio: string): Observable<any> {
    return this.getQuery(`${usuario}/${repositorio}/issues?page=1&per_page=99`)
      .pipe(catchError(this.handleError))
  }
  handleError(error: any) {

    return throwError(error.message);
  }


}
