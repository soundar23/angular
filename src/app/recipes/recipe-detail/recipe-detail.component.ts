import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeServiceService } from '../recipe-service.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeDetails!:Recipe;
  id!:number;
  constructor(private recipeService:RecipeServiceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.id=params.id;
      this.recipeDetails = this.recipeService.getRecipebyId(params.id);
    })
  }
  addToShoppingList(){
this.recipeService.addIngredients(this.recipeDetails.ingredients);
  }
  editShoppingList(){
  this.router.navigate(['edit'],{relativeTo:this.route});
  }
  onDelete(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipe']);
  }
}
