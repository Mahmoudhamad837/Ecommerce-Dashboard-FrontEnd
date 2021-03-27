import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CopounsRoutingModule } from './copouns-routing.module';
import { CopounsComponent } from './copouns.component';


@NgModule({
  declarations: [CopounsComponent],
  imports: [
    CommonModule,
    CopounsRoutingModule
  ]
})
export class CopounsModule { }
