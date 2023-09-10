import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from 'src/app/shared/service/shared.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor( private service:SharedService) { }

  // getAllRecipes(){
  //   return this.http.get('http://localhost:3000/recipes')
  // }

}
