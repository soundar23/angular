import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListServiceService {
  ingredients:Ingredient[] =[new Ingredient('Apples',10),new Ingredient('Tomato',20)];
  itemAdded=new Subject<Ingredient[]>();
  editStarted=new Subject<number>();
  constructor() { }
  getIngredients(){
    return this.ingredients.slice();
  }
 addIngredients(ingredient:Ingredient){
   console.log(ingredient);
   this.ingredients.push(ingredient);
   console.log(this.ingredients);
   this.itemAdded.next(this.ingredients.slice());
 }
 addIngredientList(ingredients:Ingredient[]){
   this.ingredients.push(...ingredients);
 }
 getIngredientById(id:number){
   return this.ingredients[id];
 }
 updateIngredient(id:number,newIngredient:Ingredient){
   this.ingredients[id]=newIngredient;
   this.itemAdded.next(this.ingredients.slice());
 }
 deleteIngredient(id:number){
   this.ingredients.splice(id,1);
  this.itemAdded.next(this.ingredients.slice());
}
}
