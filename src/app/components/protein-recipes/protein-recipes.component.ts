import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/service/shared.service';

@Component({
  selector: 'app-protein-recipes',
  templateUrl: './protein-recipes.component.html',
  styleUrls: ['./protein-recipes.component.css']
})
export class ProteinRecipesComponent implements OnInit {

  proteinRecipe!:any[]
  constructor(private service:SharedService) { }

  ngOnInit() {

    this.getProteinRecipes();
  }

getProteinRecipes(){

  return this.service.getProtein().subscribe((res:any)=>{

    this.proteinRecipe=res
    console.log(this.proteinRecipe)
  })
}

}
