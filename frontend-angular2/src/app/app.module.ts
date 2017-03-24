import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, XSRFStrategy, CookieXSRFStrategy } from '@angular/http';

// import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './app.routing.module';

import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';
import { ForgotModule } from './forgot/forgot.module';
import { RecoveryModule } from './recovery/recovery.module';

import { ToastyModule } from 'ng2-toasty';

import { AuthGuardService } from './guards/auth-guard.service';
import { LoginService } from './login/login.service';
import { Toasty } from './shared/toasty.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
		LoginModule,
		SignupModule,
		ForgotModule,
		RecoveryModule,

		ToastyModule.forRoot(),

		AppRoutingModule
  ],
	providers: [
		AuthGuardService, LoginService, Toasty
		// { provide: LocationStrategy, useClass: HashLocationStrategy }
		// { provide: XSRFStrategy, useValue: new CookieXSRFStrategy('myCookie', 'My-Header') }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
