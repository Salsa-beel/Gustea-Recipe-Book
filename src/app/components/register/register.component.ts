import { HttpClient } from '@angular/common/http';

import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/recipes-service/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 public form!:FormGroup

  constructor( private build:FormBuilder , private authService:AuthService, private router:Router) { }

  ngOnInit() {

 this.form= this.build.group({

      firstName:[''],
      lastName:[''],
      Gender:[''],
      email:[''],
      password:[''],

    })
  }


  signUp(){

    const model=this.form.value

    return this.authService.createUser(model).subscribe( res=> {
      alert( "تم التسجيل" )
      this.form.reset()
      this.router.navigate(['login']);
    },error=> {

      alert("حدث خطأ بالتسجيل")
    }

    )

  }

}


