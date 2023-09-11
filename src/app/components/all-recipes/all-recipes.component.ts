import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/recipes/services/recipes.service';
import { SharedService } from 'src/app/shared/service/shared.service';


@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css']
})
export class AllRecipesComponent implements OnInit {

  constructor(private service:RecipesService) { }

  ngOnInit() {


  }




}
