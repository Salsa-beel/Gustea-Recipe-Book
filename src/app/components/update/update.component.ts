import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/Model/category';
import { RecipesService } from 'src/app/recipes-service/services/recipes.service';
import { SharedService } from 'src/app/shared/service/shared.service';
import { Recipe } from 'src/app/Model/recipes';
import { ActivatedRoute } from '@angular/router';
import { Ingrediants } from 'src/app/Model/ingrediants';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  categories!: Category[];
  base64!: any;
  recipe: any

  constructor(private service: RecipesService, private service1: SharedService, private build:FormBuilder, private route: ActivatedRoute) {

    this.id = this.route.snapshot.paramMap.get("id")
   }

  form!:FormGroup

  id: any;
  Recipe!: Recipe;

  ngOnInit() {


    this.form = this.build.group({

      url: ['', [Validators.required]],
      name: ['', [Validators.required]],
      ingrediants: ['',[Validators.required]],
      method:['',[Validators.required]],
      categoryId: ['', [Validators.required]]

    })

    this.getCategory();
    this.getRecipeDetails()


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



  getRecipeDetails() {

    return this.service1.getRecipeById(this.id).subscribe((res: any) => {
      this.form = new FormGroup({
        url: new FormControl(res['url']),
        name: new FormControl(res['name']),
        ingrediants: new FormControl(res['ingrediants']),
        method: new FormControl(res['method']),
        categoryId: new FormControl(res['categoryId'])

      })
      this.base64=this.form.get('url')?.value;
       console.log(this.form)

    })
  }


  updateRecipe(){

    this.service1.updateRecipes(this.id,this.form.value).subscribe((res => {

      alert( "تم تعديل الوصفة" )
      window.location.reload()
    }))

  }

}
