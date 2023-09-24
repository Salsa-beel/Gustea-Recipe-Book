import { Component, Input, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/recipes-service/services/recipes.service';
import { SharedService } from 'src/app/shared/service/shared.service';
import { Recipe } from 'src/app/Model/recipes';
import { Category } from 'src/app/Model/category';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipes: Recipe[] = [];
  categories!: Category[];

  @Input()
  term!: number;
  categoryId!:Category;
  form!: FormGroup


  data: any; // for pagination
  alldata: number = 0; // for pagination
  pagination: number = 1; // for pagination
  base64: any;





  constructor(private service: RecipesService, private service1: SharedService, private build:FormBuilder) { }

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
  deleteRecipe(id:number){
    this.service.deleteRecipe(id).subscribe(res => {
      this.service.getAllRecipes();
      alert ('تم مسح  الوصفة')
      window.location.reload()
    })

  }


  //  =======Pagination========


  fetchbooks() {
    this.service1.getpagebooks(this.pagination).subscribe((res: any) => {
      this.data = res.data;
      this.alldata = res.total;
      console.log(res.total);
    });
  }
  renderPage(event: number) {
    this.pagination = event;
    this.fetchbooks();
  }



}
