import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing.module';

import { CookieService, CookieOptions } from 'angular2-cookie/core';

@NgModule({
  imports: [
    CommonModule, LoginRoutingModule, FormsModule
  ],
  declarations: [LoginComponent],
	providers: [
		CookieService,
		{ provide: CookieOptions, useValue: {} }
	]
})
export class LoginModule { }
