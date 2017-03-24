import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ForgotService } from './forgot.service';
import { LoginService } from '../login/login.service';

import { Toasty } from '../shared/toasty.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css'],
	providers: [ForgotService]
})
export class ForgotComponent implements OnInit {

	forgotForm: FormGroup;
	submitted = false;

  constructor(private forgotService: ForgotService, private loginService: LoginService, private toasty: Toasty) { }

  ngOnInit() {
		this.loginService.logged();
		this.forgotForm = new FormGroup({
			email: new FormControl()
		});
	 }

	 recovery(address) {
	 	 this.submitted = true;

		 this.forgotService.recoveryAccount(address).subscribe(
			 data => { data['status'] ? this.onSuccess(data) : this.toasty.addToast('error', data['message']); },
	     error => { console.log(error); },

			 () => this.submitted = false
	   );
	 }

	 onSuccess(data) {
		this.forgotForm.reset();
		this.toasty.addToast('success', data['message']);

		this.submitted = false;
	 }

}
