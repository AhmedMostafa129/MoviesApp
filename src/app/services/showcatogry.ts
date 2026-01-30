import { Injectable } from '@angular/core';
import { Category } from '../modals/category';

@Injectable({
  providedIn: 'root',
})
export class Showcatogry {
    category:Category[]

  constructor(){
        this.category=[
      {id:1,name:"Action"},
      {id:2,name:"Comedy"},
      {id:3,name:"Drama"},
      {id:4,name:"Horror"},
      {id:5,name:"Sci-Fi"}
    ]

   
  }
  getAllcategory():Category[]{
    return this.category;
  }

}


