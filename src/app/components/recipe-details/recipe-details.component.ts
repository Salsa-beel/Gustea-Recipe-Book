import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared/service/shared.service';
import { Recipe } from 'src/app/Model/recipes';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/Model/category';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  id: any;
  Recipe!: Recipe;

  // form!:FormGroup;
  // base64!:any;
  categories!: Category[];

  constructor(private service: SharedService, private route: ActivatedRoute) {

    this.id = this.route.snapshot.paramMap.get("id")
    // console.log(this.id)
  }

  ngOnInit() {

    this.getRecipeDetails()



  }

  getRecipeDetails() {

    return this.service.getRecipeById(this.id).subscribe((res: any) => {
      this.Recipe = res
      // console.log(this.Recipe)

    })
  }



}
