import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/recipes/services/recipes.service';
import { SharedService } from 'src/app/shared/service/shared.service';

@Component({
  selector: 'app-legumes-recipes',
  templateUrl: './legumes-recipes.component.html',
  styleUrls: ['./legumes-recipes.component.css']
})
export class LegumesRecipesComponent implements OnInit {

  legumesRecipe!:any[]
  constructor(private service:SharedService) { }

  ngOnInit() {

    this.getLegumesRecipes();
  }

getLegumesRecipes(){

  return this.service.getLegumes().subscribe((res:any)=>{

    this.legumesRecipe=res
    console.log(this.legumesRecipe)
  })
}

}
