import { Injectable } from '@angular/core';

import { Headers, RequestOptions, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ForgotService {

	private url = 'https://intense-sea-58166.herokuapp.com/recovery';

  constructor(private http: Http) { }

	recoveryAccount(address: Object): Observable<any> {
		const headers = new Headers({'Content-Type': 'application/json'});
		const options = new RequestOptions({headers: headers});

		return this.http.post(this.url, JSON.stringify(address), options)
										.map((response: Response) => response.json())
										.catch((error: any) => Observable.throw(error));
	}

}
