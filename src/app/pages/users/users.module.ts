import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { ProfileComponent } from './profile/profile.component';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsersComponent, 
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
    ThemeModule
  ]
})
export class UsersModule { }
