import { Component, Input, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/recipes/services/recipes.service';
import { SharedService } from 'src/app/shared/service/shared.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipes: any[] = [];

  @Input()
  term!: number;

  constructor(private service: RecipesService, private service1: SharedService) { }

  ngOnInit() {
    this.getRecipes();

  }

  getRecipes() {



    if (this.term == 0) {
      this.service.getAllRecipes().subscribe((res: any) => {
        this.recipes = res
      }
      )

    } else {
      this.service1.getRecipesByCategory(this.term).subscribe((res: any) => {
        this.recipes = res

      })
    }


  }

}
