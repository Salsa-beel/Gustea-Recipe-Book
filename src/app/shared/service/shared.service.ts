import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor( private http:HttpClient) { }

getAllRecipes(){
    return this.http.get('http://localhost:3000/recipes')
  }

getAllCategories(){

  return this.http.get('http://localhost:3000/categories')
}

getRecipesByCategory(keyword:any){

  return this.http.get('http://localhost:3000/categories/'+keyword+'/recipes')
}

}

