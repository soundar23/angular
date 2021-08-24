import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataStorageService } from '../data-storage.service';
import { RecipeServiceService } from '../recipes/recipe-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @Output('feature') selectedFeature=new EventEmitter<string>();
  constructor(private dataService:DataStorageService ) { }

  ngOnInit(): void {
  }
  saveRecipes(){
  this.dataService.storeRecipes();
  }
  fetchRecipes(){
    this.dataService.fetchRecipes().subscribe();
  }
}
