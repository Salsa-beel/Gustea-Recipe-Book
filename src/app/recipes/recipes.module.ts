import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllRecipesComponent } from '../components/all-recipes/all-recipes.component';
import { LandingPageComponent } from '../components/landing-page/landing-page.component';
import { LegumesRecipesComponent } from '../components/legumes-recipes/legumes-recipes.component';
import { ProteinRecipesComponent } from '../components/protein-recipes/protein-recipes.component';
import { RecipeDetailsComponent } from '../components/recipe-details/recipe-details.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AllRecipesComponent,
    LandingPageComponent,
    LegumesRecipesComponent,
    ProteinRecipesComponent,
    RecipeDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,

  ]
})
export class RecipesModule { }
