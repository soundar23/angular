import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DataStorageService } from './data-storage.service';
import { RecipeServiceService } from './recipes/recipe-service.service';
import { Recipe } from './recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeResolverService implements Resolve<Recipe[]> {

  constructor(private datastorageService:DataStorageService,private recipeservice:RecipeServiceService) { }

  resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot) {
    const recipe = this.recipeservice.getRecipes();
    if(recipe.length === 0){
      return this.datastorageService.fetchRecipes();
    }
    return recipe;
  }
}
