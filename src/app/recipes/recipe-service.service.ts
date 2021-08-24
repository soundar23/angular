import {  Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DataStorageService } from '../data-storage.service';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListServiceService } from '../shopping-list/shopping-list-service.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeServiceService {
  recipeChanged = new Subject<Recipe[]>();
  // recipes = [new Recipe('A test Recipe1', 'This is a test recipe', 'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500/k%2FEdit%2FGrilled-Chicken-with-Avocado-Salad_-9',
  //   [new Ingredient('apple', 20),
  //   new Ingredient('pepper', 30)]),
  // new Recipe('A test Recipe2', 'This is a test recipe', 'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500/k%2FEdit%2FGrilled-Chicken-with-Avocado-Salad_-9',
  //   [new Ingredient('breads', 20), 
  //   new Ingredient('butter', 250)]),
  // ];
  recipes:Recipe[] = [];
  constructor(private shoppingService:ShoppingListServiceService ) { }
  setRecipes(recipes:Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }
  getRecipes() {
    return this.recipes.slice();
  }
 addIngredients(ingredients:Ingredient[])
 {
 this.shoppingService.addIngredientList(ingredients)
 }
 getRecipebyId(id:number){
   console.log(this.recipes[0],id);
  return this.recipes[id];
 }
 addRecipe(recipe:Recipe){
   this.recipes.push(recipe)
   this.recipeChanged.next(this.recipes.slice());
 }
 updateRecipe(index:number,newRecipe:Recipe){
   this.recipes[index]=newRecipe;
   this.recipeChanged.next(this.recipes.slice());

 }
 deleteRecipe(index:number){
  this.recipes.splice(index,1);
  this.recipeChanged.next(this.recipes.slice());

}
}
