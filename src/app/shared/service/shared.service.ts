import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }



  getAllCategories() {

    return this.http.get('http://localhost:3000/categories')
  }

  getRecipesByCategory(keyword: number) {

    return this.http.get('http://localhost:3000/categories/' + keyword + '/recipes')
  }

  // For recipe details
  getRecipeById(id: number) {
    return this.http.get('http://localhost:3000/recipes/' + id)
  }



  getpagebooks(page: number) {

    return this.http.get('http://localhost:3000/' + '?page=' + page);
  }
}

