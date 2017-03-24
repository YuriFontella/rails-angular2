import { Component, OnInit } from '@angular/core';

import { LoginService } from './login.service';
import { Toasty } from '../shared/toasty.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
	providers: [LoginService]
})
export class LoginComponent implements OnInit {

	submitted = false;
	url: string;

  constructor(private loginService: LoginService, private toasty: Toasty, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
		this.loginService.logged();
		this.url = this.activatedRoute.queryParams['url'] || '/';
	}

	authenticate(session) {
		this.submitted = true;
		this.loginService.createSession(session).subscribe(
			data => {
				data['status'] ? this.onSuccess(data) : this.toasty.addToast('error', data['message']);

			},
			error => { console.log(error); },

			() => this.submitted = false
		);
	}

	onSuccess(data) {
    this.loginService.login(data);
    this.toasty.addToast('success', data['message']);
    this.router.navigate([this.url]);
	}
}
