import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListServiceService } from './shopping-list-service.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit ,OnDestroy {
  ingredients:Ingredient[]=[] ;
  igChanged!:Subscription;
  constructor(private shoppingList:ShoppingListServiceService) { 
  
  }

  ngOnInit() {
    this.ingredients=this.shoppingList.getIngredients();
    this.igChanged = this.shoppingList.itemAdded
    .subscribe(
      (ingredients:Ingredient[])=>{
        console.log(ingredients);
        this.ingredients=ingredients
      }
    )
    console.log(this.ingredients)
  }
  onEditItem(index:number){
    this.shoppingList.editStarted.next(index);
  }
 ngOnDestroy() {
   this.igChanged.unsubscribe();
 }
 
}
