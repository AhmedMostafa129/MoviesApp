import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Movies } from '../modals/movies';
import { Category } from '../modals/category';
import { FormsModule } from '@angular/forms';
import { Filmes } from '../filmes/filmes';
import { Footer } from '../footer/footer';
import { Showcatogry } from '../services/showcatogry';

@Component({
  selector: 'app-section',
  imports: [CommonModule,FormsModule,Filmes,FormsModule],
  templateUrl: './section.html',
  styleUrl: './section.css',
})
export class Section {
  dropdownOpen = false;
  category:Category[]
  searchTerm: string = '';


  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
  selectedCategoryId:number=0
  constructor(private _showcatogry:Showcatogry){
    this.category=this._showcatogry.getAllcategory()
  }
searchmove(searchInmoviesList:string){

}



}
