import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SignupService {

	private url = 'https://intense-sea-58166.herokuapp.com/users.json';

  constructor(private http: Http) { }

	createUser(user: Object): Observable<any> {
		const headers = new Headers({'Content-Type': 'application/json'});
		const options = new RequestOptions({headers: headers});

		return this.http.post(this.url, JSON.stringify(user), options)
										.map((response: Response) => response.json())
										.catch((error: any) => Observable.throw(error));
	}

}
