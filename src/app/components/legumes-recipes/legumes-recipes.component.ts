import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/Model/recipes';
import { RecipesService } from 'src/app/recipes-service/services/recipes.service';
import { SharedService } from 'src/app/shared/service/shared.service';

@Component({
  selector: 'app-legumes-recipes',
  templateUrl: './legumes-recipes.component.html',
  styleUrls: ['./legumes-recipes.component.css']
})
export class LegumesRecipesComponent implements OnInit {


  constructor(private service:RecipesService) { }

  ngOnInit() {


  }



}
