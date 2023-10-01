import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Components/add/add.component';
import { AllRecipesComponent } from './Components/all-recipes/all-recipes.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { LegumesRecipesComponent } from './Components/legumes-recipes/legumes-recipes.component';
import { ProteinRecipesComponent } from './Components/protein-recipes/protein-recipes.component';
import { RecipeDetailsComponent } from './Components/recipe-details/recipe-details.component';
import { RegisterComponent } from './Components/register/register.component';
import { ShoppingListComponent } from './Components/shopping-list/shopping-list.component';
import { UpdateComponent } from './Components/update/update.component';
import { UserComponent } from './Components/user/user.component';


const routes: Routes = [
  {path:"home" ,component:LandingPageComponent},
  {path:"all-recipes",component:AllRecipesComponent},
  {path:"details/:id",component:RecipeDetailsComponent},
  {path:"protein",component:ProteinRecipesComponent},
  {path:"legumes",component:LegumesRecipesComponent},
  {path:"shopping",component:ShoppingListComponent},
  {path:"update/:id",component:UpdateComponent},
  {path:"add",component:AddComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:UserComponent},

  {path:"**",redirectTo:"home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
