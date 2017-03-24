import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './guards/auth-guard.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{ path: 'home', redirectTo: '/', pathMatch: 'full' },

	{ path: '', component: HomeComponent, canActivate: [AuthGuardService] },
	{ path: '**', component: AppComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
