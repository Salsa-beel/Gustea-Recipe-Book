import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllRecipesComponent } from '../Components/all-recipes/all-recipes.component';
import { LandingPageComponent } from '../Components/landing-page/landing-page.component';
import { LegumesRecipesComponent } from '../Components/legumes-recipes/legumes-recipes.component';
import { ProteinRecipesComponent } from '../Components/protein-recipes/protein-recipes.component';
import { RecipeDetailsComponent } from '../Components/recipe-details/recipe-details.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RecipeComponent } from '../Components/recipe-card/recipe.component';
import { ShoppingListComponent } from '../Components/shopping-list/shopping-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from '../Components/add/add.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { UpdateComponent } from '../Components/update/update.component';
import { UserComponent } from '../Components/login/user.component';
import { RegisterComponent } from '../Components/register/register.component';
import { ProfileComponent } from '../Components/profile/profile.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AllRecipesComponent,
    LandingPageComponent,
    LegumesRecipesComponent,
    ProteinRecipesComponent,
    RecipeDetailsComponent,
    RecipeComponent,
    ShoppingListComponent,
    AddComponent,
    UpdateComponent,
    UserComponent,
    RegisterComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,




  ]
})
export class RecipesModule { }
