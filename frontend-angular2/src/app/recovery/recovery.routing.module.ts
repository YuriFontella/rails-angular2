import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecoveryComponent } from './recovery.component';

const passwordRoutes: Routes = [
	{ path: 'recovery/:id/edit', component: RecoveryComponent }
];

@NgModule({
	imports: [RouterModule.forChild(passwordRoutes)],
	exports: [RouterModule]
})
export class RecoveryRoutingModule {}
