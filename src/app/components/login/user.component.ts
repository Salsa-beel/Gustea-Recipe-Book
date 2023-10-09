import { Component, OnInit } from '@angular/core';
import { NgModel, Validators } from '@angular/forms';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/recipes-service/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public loginForm!:FormGroup


  constructor(private authService :AuthService , private formBuilder:FormBuilder , private router:Router) { }

  ngOnInit() {

    this.loginForm=this.formBuilder.group(
      {
        email:['',Validators.required],
        password:['',Validators.required]

      }



    )
  }

  // onLogin(loginForm: { value: any; }){
  //   console.log(loginForm.value)

  //   const token = this.authService.authUSer(loginForm.value);

  //   if (token){

  //    localStorage.setItem('token',token.userName)
  //    alert('login successful');
  //   } else {

  //    alert('login not successful');
  //    }
  //   }

login(){

  this.authService.loginUser().subscribe( res=> {
    const user =  res.find((a:any)=>{
      return a.email ===  this.loginForm.value.email && a.password === this.loginForm.value.password
    });

    if (user){
      alert('تم الدخول بنجاح');
      this.loginForm.reset();
      console.log(user)
      this.router.navigate(['home'])
    } else {
      alert('ليس لديك حساب')
      this.loginForm.reset();
      this.router.navigate(['register'])
    }

  },error=>{
    alert('حدث خطأ')
  }


  )

}



  }

