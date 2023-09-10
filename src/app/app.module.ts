import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { RecipesModule } from './recipes/recipes.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,


  ],

  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
