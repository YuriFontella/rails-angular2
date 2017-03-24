import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class RecoveryService {

	private url = 'https://intense-sea-58166.herokuapp.com/recovery/';

  constructor(private http: Http) { }

	recovery(token: any, email: any) {
		return this.http.get(this.url + token + '/edit.json?email=' + email)
		    						.map((response: Response) => response.json())
										.catch((error: any) => Observable.throw(error));
	}

	passwordUpdate(credentials: Object, id: any): Observable<any> {
		const headers = new Headers({'Content-Type': 'application/json'});
		const options = new RequestOptions({headers: headers});

		return this.http.put(this.url + id + '.json', JSON.stringify(credentials), options)
										.map((response: Response) => response.json())
										.catch((error: any) => Observable.throw(error));
	}

}
