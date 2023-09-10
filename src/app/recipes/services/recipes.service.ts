import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from 'src/app/shared/service/shared.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor( private http:HttpClient) { }

  getAllRecipes(){
    return this.http.get('http://localhost:3000/recipes')
  }

  getProtein(){

    return this.http.get('http://localhost:3000/categories/1/recipes')
  }

  getLegumes(){

    return this.http.get('http://localhost:3000/categories/2/recipes')
  }


}
