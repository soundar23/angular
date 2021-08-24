import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeServiceService } from './recipes/recipe-service.service';
import { Recipe } from './recipes/recipe.model';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http:HttpClient,private recipeService:RecipeServiceService) { }

  storeRecipes(){

   const recipeslist = this.recipeService.getRecipes();
   this.http.put('https://sample-angular-b16f9-default-rtdb.firebaseio.com/recipes.json',
   recipeslist
   ).subscribe(
     (response)=>{console.log(response)}
   )
  }
  fetchRecipes(){
  return this.http.get<Recipe[]>('https://sample-angular-b16f9-default-rtdb.firebaseio.com/recipes.json')
  .pipe(
    map((recipes:Recipe[])=>{
      return recipes.map(recipe=>{
        return{...recipe,ingredients:recipe.ingredients?recipe.ingredients:[]}
      })
    }
  ),
  tap(response=>
    this.recipeService.setRecipes(response)
    )
  )}
}
