import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RecoveryRoutingModule } from './recovery.routing.module';
import { RecoveryService } from './recovery.service';

import { RecoveryComponent } from './recovery.component';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, RecoveryRoutingModule
  ],
  declarations: [RecoveryComponent],
  providers: [RecoveryService]
})
export class RecoveryModule { }
