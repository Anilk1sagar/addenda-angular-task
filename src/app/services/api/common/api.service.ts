import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Files
import { Postman, POSTMAN } from '../postman';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

	private headers = new HttpHeaders().set('Content-Type', 'application/json');

	constructor(private http: HttpClient) {
	}

	private formatErrors(error: any) {
		return throwError(error.error);
	}

	get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
		return this.http.get(`${Postman.API_URL}${path}`, { params: params, headers : this.headers })
		.pipe(catchError(this.formatErrors));
	}

	put(path: string, body: Object = {}): Observable<any> {
		return this.http.put(
			`${Postman.API_URL}${path}`,
			JSON.stringify(body),
			{headers : this.headers}
		).pipe(catchError(this.formatErrors));
	}

	post(path: string, body: Object = {}): Observable<any> {
		return this.http.post(
			`${path}`,
			JSON.stringify(body), {headers : this.headers}
		).pipe(catchError(this.formatErrors));
	}

	delete(path): Observable<any> {
		return this.http.delete(
			`${Postman.API_URL}${path}`,
			{headers : this.headers}
		).pipe(catchError(this.formatErrors));
	}

}

