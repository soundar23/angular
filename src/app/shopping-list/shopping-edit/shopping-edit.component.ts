import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListServiceService } from '../shopping-list-service.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit ,OnDestroy{
  // @ViewChild('ingredient') nameInput!:ElementRef;
  // @ViewChild('amount') amtInput!:ElementRef;
  @ViewChild('f') slform!:NgForm;
  editmode=false;
  editItemIndex!:number;
  ingredient!:Ingredient;
  subscription!:Subscription;
  constructor(private shoppingservice:ShoppingListServiceService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingservice.editStarted
    .subscribe(
      (index:number)=>{
        this.editItemIndex = index;
        this.editmode=true;
        this.ingredient=this.shoppingservice.getIngredientById(index);
        this.slform.setValue({
          name:this.ingredient.name,
          amount:this.ingredient.amount
        })
      })
  }
  onAdditem(form: NgForm){
  //  this.sendItem.emit({name:this.nameInput.nativeElement.value,amount:this.amtInput.nativeElement.value})
  // console.log(this.nameInput.nativeElement.value,this.amtInput.nativeElement.value)
  const value = form.value;
  const ingredient = new Ingredient(value.name,value.amount);
  if(this.editmode)
  {
    this.shoppingservice.updateIngredient(this.editItemIndex,ingredient)
  }
  else
  {
    this.shoppingservice.addIngredients(ingredient);
  }
  this.editmode = false;
  this.slform.reset();

  }
  onClear(){
    this.slform.reset();
    this.editmode = false;
  }
  onDelete() {
    this.shoppingservice.deleteIngredient(this.editItemIndex);
    this.onClear();
  }
  ngOnDestroy() {
   this.subscription.unsubscribe();
  }
}
