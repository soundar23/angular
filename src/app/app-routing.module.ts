import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponentComponent } from './auth-component/auth-component.component';
import { RecipeResolverService } from './recipe-resolver.service';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeLandingComponent } from './recipes/recipe-landing/recipe-landing.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  {path:'',redirectTo:'/recipe',pathMatch:'full'},
  {path:'recipe', component:RecipesComponent,
  children:[
    {path:'',component:RecipeLandingComponent},
    {path:'new',component:RecipeEditComponent},
    {path:':id',component:RecipeDetailComponent,resolve:[RecipeResolverService]},
    {path:':id/edit',component:RecipeEditComponent,resolve:[RecipeResolverService]},
    
  ]},
  {path:'shoppingList', component:ShoppingListComponent},
  {path:'auth', component:AuthComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
