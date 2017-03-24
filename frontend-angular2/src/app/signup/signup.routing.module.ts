import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './signup.component';

const signupRoutes: Routes = [
	{ path: 'signup', component: SignupComponent }
];

@NgModule({
	imports: [RouterModule.forChild(signupRoutes)],
	exports: [RouterModule]
})
export class SignupRoutingModule { }
