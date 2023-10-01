import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilteringComponent } from './components/filtering/filtering.component';

import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ForgotMyPasswordComponent } from './components/forgot-my-password/forgot-my-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FilteringComponent,
    SearchBarComponent,
    ForgotMyPasswordComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    BrowserModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    FilteringComponent,
    ForgotMyPasswordComponent,
    SearchBarComponent,
    NotFoundComponent
  ]
})
export class SharedModule { }
