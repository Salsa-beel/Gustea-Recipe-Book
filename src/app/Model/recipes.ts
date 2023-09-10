
 export interface Rec{

  // "id":"1",
  // "name": "ساندويش الستيك بالجبن",
  // "url": "/assets/images/sand1.png",
  // "description": " أطيب وأسهل طريقة لعمل ساندويشات بلحم الستيك وبطعم الجبنة الرائعة، تتبعي الخطوات السهلة والناجحة، جربوها الآن",
  // "author": "author1",
  // "ingrediants":

  id: number,
  name:string,
  url:File,
  description : string[],
  author: string,
  ingrediants: string[],
  method: string[],
  categoryId: number

 }
