import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from 'src/app/shared/service/shared.service';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { baseUrl } from 'src/app/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  base64:any;

  constructor( private http:HttpClient) { }

  getAllRecipes(){
    return this.http.get(`${baseUrl}/recipes`)
  }


  createRecipe(model:any){

    return this.http.post(`${baseUrl}/recipes`,model)
  }

  deleteRecipe(id:number){
    return this.http.delete(`${baseUrl}/recipes/` + id)
  }



}
