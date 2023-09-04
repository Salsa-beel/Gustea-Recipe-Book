import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor( private http:HttpClient) { }

  getAllRecipes(){
    return this.http.get('http://localhost:3000/food')
  }
}
