import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { SignupService } from './signup.service';
import { LoginService } from '../login/login.service';

import { Toasty } from '../shared/toasty.service';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css'],
	providers: [SignupService]
})
export class SignupComponent implements OnInit {

	submitted = false;
	validated = false;
	userForm: FormGroup;

	constructor(private signupService: SignupService, private loginService: LoginService, private toasty: Toasty, private fb: FormBuilder) {}

	ngOnInit() {
		this.loginService.logged();
		this.userForm = this.fb.group({
			name: null,
			second_name: null,
			email: null,
			password: null,
			terms: false,
		});
	 }

	createUser(user) {
		this.submitted = true;
		this.validated = true;

		this.signupService.createUser(user).subscribe(
			data => { data['status'] ? this.onSuccess() :
																 this.toasty.addToast('error', data['message']);
			},
			error => {
				console.log(error);
			},

			() => this.submitted = false
		);
	}

	private onSuccess() {
		this.userForm.reset();
		this.toasty.addToast('success', 'Cadastro realizado com sucesso.');

		this.validated = false;
	}

}
