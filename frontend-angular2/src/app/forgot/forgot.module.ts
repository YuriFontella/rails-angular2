import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotComponent } from './forgot.component';
import { ForgotRoutingModule } from './forgot.routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
		ReactiveFormsModule,
		ForgotRoutingModule
  ],
  declarations: [ForgotComponent]
})
export class ForgotModule { }
