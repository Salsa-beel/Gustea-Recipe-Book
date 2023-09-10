import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';
import { RecipesService } from 'src/app/recipes/services/recipes.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor( private service:RecipesService) { }

  ngOnInit() {
  }


  // getRandom(){

  //   return this.service.getAllRecipes().
  // }
}
