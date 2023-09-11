import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/recipes/services/recipes.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipes :any[]=[];

  constructor(private service:RecipesService) { }

  ngOnInit() {
    this.getRecipes();

  }

  getRecipes(){
    this.service.getAllRecipes().subscribe((res:any)=>{
      this.recipes=res



    }
    )
  }

}
