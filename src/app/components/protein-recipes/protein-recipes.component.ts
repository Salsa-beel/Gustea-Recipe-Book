import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/Model/recipes';
import { RecipesService } from 'src/app/recipes-service/services/recipes.service';
import { SharedService } from 'src/app/shared/service/shared.service';

@Component({
  selector: 'app-protein-recipes',
  templateUrl: './protein-recipes.component.html',
  styleUrls: ['./protein-recipes.component.css']
})
export class ProteinRecipesComponent implements OnInit {


  constructor(private service:RecipesService) { }

  ngOnInit() {


  }



}
