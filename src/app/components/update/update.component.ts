import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/Model/category';
import { RecipesService } from 'src/app/recipes-service/services/recipes.service';
import { SharedService } from 'src/app/shared/service/shared.service';
import { Recipe } from 'src/app/Model/recipes';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  categories!: Category[];
  base64!: any;
  recipe: any

  constructor(private service: RecipesService, private service1: SharedService, private build:FormBuilder) { }

  form!:FormGroup

  ngOnInit() {


    this.form = this.build.group({

      url: ['', [Validators.required]],
      name: ['', [Validators.required]],
      ingrediants: ['',[Validators.required]],
      method:['',[Validators.required]],
      categoryId: ['', [Validators.required]]

    })

    this.getCategory();
  }




  getCategory() {
    this.service1.getAllCategories().subscribe((res: any) => {
      this.categories = res
    })


  }

  getImagePath(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.base64 = reader.result;
      this.form.get('url')?.setValue(this.base64)
    };


  }


  updateRecipe(recipe:any){
    this.form.get('url')?.setValue(recipe.url)
    this.form.get('name')?.setValue(recipe.name)
    this.form.get('ingrediants')?.setValue(recipe.ingrediants)
    this.form.get('method')?.setValue(recipe.method)
    this.form.get('categoryId')?.setValue(recipe.categoryId)
    this.base64=recipe.url

    console.log(recipe);

  }


}
