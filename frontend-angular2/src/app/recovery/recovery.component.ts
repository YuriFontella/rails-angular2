import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

import { RecoveryService } from './recovery.service';
import { Toasty } from '../shared/toasty.service';
import { LoginService } from '../login/login.service';

declare var $: any;

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit, OnDestroy, AfterViewInit {

  user: Object = [];
  recoveryForm: FormGroup;

  submitted = false;
  message: string;

  constructor(
    private recoveryService: RecoveryService,
    private loginService: LoginService,
    private toasty: Toasty,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.loginService.logged();
    
    const email = this.route.snapshot.queryParams['email'];

    this.recoveryService.recovery(this.route.snapshot.params['id'], email)
                        .subscribe(response => this.user = response);

		this.recoveryForm = this.fb.group({
			password: [],
			password_confirmation: [],
			email: [email, Validators.required]
		});
  }

  onRecovery(data, id) {
		this.message = null;
		this.submitted = true;

		this.recoveryService.passwordUpdate(data, id).subscribe(
			response => { response['status'] ? this.onSuccess() : this.message = response['message']; },
			error => { console.log(error); },

			() => this.submitted = false
		);
  }

  onSuccess() {
    this.toasty.addToast('success', 'Senha alterada com sucesso!');
    this.router.navigate(['/login']);
  }

  ngAfterViewInit() {
    $('.ui.modal').modal({
      closable  : false
    }).modal('show');
  }

  ngOnDestroy() {
    $('.ui.modal').modal('hide');
  }

}
