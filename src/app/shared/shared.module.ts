import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilteringComponent } from './components/filtering/filtering.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FilteringComponent,
    PaginationComponent,
    SearchBarComponent
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
    PaginationComponent,
    SearchBarComponent
  ]
})
export class SharedModule { }
