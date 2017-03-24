import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForgotComponent } from './forgot.component';

const forgotRoutes: Routes = [
	{ path: 'forgot', component: ForgotComponent }
];

@NgModule({
	imports: [RouterModule.forChild(forgotRoutes)],
	exports: [RouterModule]
})
export class ForgotRoutingModule { }
