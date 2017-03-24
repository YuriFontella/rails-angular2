import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignupComponent } from './signup.component';
import { SignupRoutingModule } from './signup.routing.module';

@NgModule({
  imports: [
    CommonModule, SignupRoutingModule, ReactiveFormsModule
  ],
  declarations: [SignupComponent]
})
export class SignupModule { }
