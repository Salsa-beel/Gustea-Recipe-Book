import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/recipes/services/recipes.service';
import { SharedService } from 'src/app/shared/service/shared.service';

@Component({
  selector: 'app-protein-recipes',
  templateUrl: './protein-recipes.component.html',
  styleUrls: ['./protein-recipes.component.css']
})
export class ProteinRecipesComponent implements OnInit {

  proteinRecipe!:any[]
  constructor(private service:RecipesService) { }

  ngOnInit() {


  }



}
