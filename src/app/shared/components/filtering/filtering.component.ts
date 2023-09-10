import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../service/shared.service';


@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.css']
})
export class FilteringComponent implements OnInit {
  recipes:any[]=[];
  categories:any[]=[];


  constructor(private service:SharedService){}

  ngOnInit(): void{
    this.getCategories();

  }


  getRecipes(){
    this.service.getAllRecipes().subscribe((res:any)=>{
      this.recipes=res



    }
    )
  }

  getCategories(){

    this.service.getAllCategories().subscribe((res:any) =>{
      this.categories=res
      // console.log(res)

    })
  }



  filterCategory(event:any){
    let value = event.target.value;

    if (value =="الكل"){
      this.getRecipes()
    }else{
      this.getRecipeCategory(value)
    }

//  this.getRecipeCategory(value)
   console.log(value)
  }


  getRecipeCategory(keyword:any){
this.service.getRecipesByCategory(keyword).subscribe((res:any)=>{
 this.recipes = res

})

  }
}
