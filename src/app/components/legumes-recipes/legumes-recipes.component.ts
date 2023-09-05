import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/recipes/services/recipes.service';

@Component({
  selector: 'app-legumes-recipes',
  templateUrl: './legumes-recipes.component.html',
  styleUrls: ['./legumes-recipes.component.css']
})
export class LegumesRecipesComponent implements OnInit {

  recipes :any[]=[];

  constructor(private service:RecipesService) { }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes(){
    this.service.getAllRecipes().subscribe((res:any)=>{
      this.recipes=res

      console.log(res)

    }
    )
  }

}
