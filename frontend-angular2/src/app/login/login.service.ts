import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Rx';

import { CookieService } from 'angular2-cookie/core';

@Injectable()
export class LoginService {

	private url = 'https://intense-sea-58166.herokuapp.com/sessions.json';

	event: EventEmitter<boolean> = new EventEmitter();

  constructor(private http: Http, private router: Router, private cookie: CookieService) { }

	createSession(user: Object): Observable<any> {
		const headers = new Headers({'Content-Type': 'application/json'});
		const options = new RequestOptions({headers: headers});

		return this.http.post(this.url, JSON.stringify(user), options)
										.map((response: Response) => response.json())
										.catch((error: any) => Observable.throw(error));
	}

	login(data) {
		this.cookie.put('validatted', data['status']);
		this.cookie.put('token', data['session']);
	}

	logout() {
		this.cookie.removeAll();

		this.event.emit(false);
		this.router.navigate(['/login']);
	}

	logged() {
		if (this.online()) {
			this.router.navigate(['/']);
		}

		return false;
	}

	online() {
		if (this.cookie.get('validatted')) {
			return true;
		}

		return false;
	}

}
