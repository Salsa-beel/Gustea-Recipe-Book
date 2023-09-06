import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../service/shared.service';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.css']
})
export class FilteringComponent implements OnInit {

  categories:any[]=[];

  constructor(private service:SharedService){}

  ngOnInit(): void{
    this.getCategories();

  }

  getCategories(){

    this.service.getAllCategories().subscribe((res:any) =>{
      this.categories=res
      // console.log(res)
    })
  }


  filterCategory(event:any){
    let value = event.target.value;
   this.getRecipeCategory(value)
  }

  getRecipeCategory(keyword:string){
this.service.getRecipeByCategory(keyword).subscribe(res=>{


})

  }
}
