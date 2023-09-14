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



@NgModule({
  declarations: [
    AllRecipesComponent,
    LandingPageComponent,
    LegumesRecipesComponent,
    ProteinRecipesComponent,
    RecipeDetailsComponent,
    RecipeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule

  ]
})
export class RecipesModule { }
