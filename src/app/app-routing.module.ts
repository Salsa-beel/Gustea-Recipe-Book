import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { AllRecipesComponent } from './components/all-recipes/all-recipes.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LegumesRecipesComponent } from './components/legumes-recipes/legumes-recipes.component';
import { ProteinRecipesComponent } from './components/protein-recipes/protein-recipes.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';

const routes: Routes = [
  {path:"home" ,component:LandingPageComponent},
  {path:"all-recipes",component:AllRecipesComponent},
  {path:"details/:id",component:RecipeDetailsComponent},
  {path:"protein",component:ProteinRecipesComponent},
  {path:"legumes",component:LegumesRecipesComponent},
  {path:"add",component:AddComponent},
  {path:"**",redirectTo:"home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
