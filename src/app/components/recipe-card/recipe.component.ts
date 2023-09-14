import { Component, Input, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/recipes-service/services/recipes.service';
import { SharedService } from 'src/app/shared/service/shared.service';
import { Recipe } from 'src/app/Model/recipes';
import { Category } from 'src/app/Model/category';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipes: Recipe[] = [];

  @Input()
  term!: number;
  categoryId!:Category;

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


//   getCategory(){

//     if(this.categoryId == 1){
//     this.service1.getRecipesByCategory(this.categoryId).subscribe((res:any)=>{

//       this.recipes=res
//     }
//     )

//   }else {

//   }
// }

}
