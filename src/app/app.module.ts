import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { CockpitComponentComponent } from './cockpit-component/cockpit-component.component';
import { ServerComponentComponent } from './server-component/server-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponentComponent } from './odd-component/odd-component.component';
import { EvenComponentComponent } from './even-component/even-component.component';
import { BasicHighlightDirective } from './custom-directive/appDirective.component';
import { BetterDirectiveDirective } from './better-directive.directive';
import { DropdownDirectiveDirective } from './dropdown-directive.directive';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { CounterServiceService } from './counter-service.service';
import { ShoppingListServiceService } from './shopping-list/shopping-list-service.service';
import { RecipeLandingComponent } from './recipes/recipe-landing/recipe-landing.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeServiceService } from './recipes/recipe-service.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { AuthComponentComponent } from './auth-component/auth-component.component';
import { LoaderComponent } from './loader/loader.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    CockpitComponentComponent,
    ServerComponentComponent,
    GameControlComponent,
    OddComponentComponent,
    EvenComponentComponent,
    BasicHighlightDirective,
    BetterDirectiveDirective,
    DropdownDirectiveDirective,
    ActiveUsersComponent,
    InactiveUsersComponent,
    RecipeLandingComponent,
    RecipeEditComponent,
    AuthComponentComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CounterServiceService,ShoppingListServiceService,RecipeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
