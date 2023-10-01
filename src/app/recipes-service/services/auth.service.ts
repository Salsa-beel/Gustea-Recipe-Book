import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class AuthService {


signupForm!: FormGroup;

constructor( private formBuilder:FormBuilder, private http:HttpClient) { }


// authUSer(user:any){

// let UserArray = [];

// if (localStorage.getItem('Users')){
//   UserArray = JSON.parse (localStorage.getItem('Users') as any);
// }

// return UserArray.find((p: { userName: any; password: any; })=> p.userName === user.userName && p.password === user.password)

// }


createUser(model:any){

  return this.http.post('http://localhost:3000/signupUser',model);
}


loginUser(){

  return this.http.get<any>('http://localhost:3000/signupUser');
}
}
