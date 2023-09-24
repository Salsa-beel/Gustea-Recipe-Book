import { Component, Input, OnInit } from '@angular/core';
import { CheckboxControlValueAccessor, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/Model/category';
import { Recipe } from 'src/app/Model/recipes';
import { RecipesService } from 'src/app/recipes-service/services/recipes.service';
import { SharedService } from 'src/app/shared/service/shared.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  base64: any
  form!: FormGroup

  categories!: Category[];
  router: any;
  constructor(private build: FormBuilder, private sharservice: SharedService , private recipeService:RecipesService) {

  }

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

  getImagePath(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.base64 = reader.result;
      this.form.get('url')?.setValue(this.base64)
    };


  }

  getCategory() {
    this.sharservice.getAllCategories().subscribe((res: any) => {
      this.categories = res
    })


  }

  addRecipe(){
    const model=this.form.value

   this.recipeService.createRecipe(model).subscribe(res => {
     alert( "تم أضافة الوصفة" )
     window.location.reload()
   })

  }

  // updateRecipe(item:Recipe){
  //   this.form.get('url')?.setValue(item.url)
  //   this.form.get('name')?.setValue(item.name)
  //   this.form.get('ingrediants')?.setValue(item.ingrediants)
  //   this.form.get('method')?.setValue(item.method)
  //   this.form.get('categoryId')?.setValue(item.categoryId)



  // }

}



