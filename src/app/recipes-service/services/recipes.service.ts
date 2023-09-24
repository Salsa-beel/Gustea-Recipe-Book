import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from 'src/app/shared/service/shared.service';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  base64:any;

  constructor( private http:HttpClient) { }

  getAllRecipes(){
    return this.http.get('http://localhost:3000/recipes')
  }


  createRecipe(model:any){

    return this.http.post('http://localhost:3000/recipes',model)
  }

  deleteRecipe(id:number){
    return this.http.delete('http://localhost:3000/recipes/' + id)
  }


}
