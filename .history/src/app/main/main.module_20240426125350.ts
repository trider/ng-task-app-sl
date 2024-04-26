import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [

  ],
  imports: [
    HomeComponent,
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
