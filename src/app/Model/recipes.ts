
 export class Recipe{

  id: number;
  name:string;
  url:string;
  description: string[];
  author: string;
  ingrediants: string[];
  method: string[];
  categoryId: number
base64: any;

constructor(Id:number,Name:string, Desc:string[],Url:string,Author:string,Ingrd:string[],Method:string[],CategId:number){
  this.id=Id;
  this.name=Name;
  this.description=Desc;
  this.url=Url;
  this.author=Author;
  this.ingrediants=Ingrd;
  this.method=Method;
  this.categoryId=CategId;
}

 }
