import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeServiceService } from '../recipe-service.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[];
  constructor(private recipeService:RecipeServiceService,private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes=this.recipeService.getRecipes();
    this.recipeService.recipeChanged
    .subscribe(
      (recipes:Recipe[])=>{
        this.recipes=recipes;
      }
    )
  }
  onNewRecipe() {
 this.router.navigate(['new'],{relativeTo:this.route})
  }
}
