import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { baseUrl } from 'src/app/environments/environment';
import { Recipe } from 'src/app/Model/recipes';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }



  getAllCategories() {

    return this.http.get(`${baseUrl}/categories`)
  }

  getRecipesByCategory(keyword: number) {

    return this.http.get(`${baseUrl}/categories/` + keyword + '/recipes')
  }

  // For recipe details
  getRecipeById(id: number) {
    return this.http.get(`${baseUrl}/recipes/` + id)
  }



  getpagebooks(page: number) {

    return this.http.get(`${baseUrl}/` + '?page=' + page);
  }

  updateRecipes(id:number,data:Recipe){
    return this.http.put(`${baseUrl}/recipes/`+ id ,data)
  }
}

