import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm,FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeServiceService } from '../recipe-service.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id!:number;
  editmode:boolean=false; 
  recipeForm!:FormGroup;
  constructor(private route:ActivatedRoute,private recipeService:RecipeServiceService
              ,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id=+params['id']
        this.editmode=params['id'] != null;
        this.initform();
        console.log(this.editmode)
      }
    )
  }
  private initform(){
    let recipeName='';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);
    if( this.editmode)
    {
      const recipe = this.recipeService.getRecipebyId(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imgpath;
      recipeDescription = recipe.description;
      if(recipe['ingredients']){
        for(let ingredient of recipe.ingredients)
        {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name),
              'amount': new FormControl(ingredient.amount)
            })
          )
        }
      }

    }
    this.recipeForm = new FormGroup({
      'name':new FormControl(recipeName,Validators.required),
      'imgpath':new FormControl(recipeImagePath,Validators.required),
      'description':new FormControl(recipeDescription,Validators.required),
      'ingredients':recipeIngredients
    })
  }
  // get controls() { // a getter!
  //   console.log(this.recipeForm.get('ingredients')?.value)
  //   return (<FormArray>this.recipeForm.get('ingredients')).value;
  // }
  // get ingredients(): FormArray {
  //   console.log(this.recipeForm.get('ingredients'))
  //   return <FormArray>this.recipeForm.get('ingredients');
  // }
  get controls() { // a getter!
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
  onAddIngredient() {
    const formArray = this.recipeForm.get('ingredients') as FormArray;
      (formArray.push(
      new FormGroup({
        'name':new FormControl('',Validators.required),
        'amount':new FormControl(null,
                                [Validators.required,
                                Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )) 
   
  }
  
  onSubmit(){
    console.log(this.recipeForm)
   if(this.editmode){
    this.recipeService.updateRecipe(this.id,this.recipeForm.value)
   }
   else{
    this.recipeService.addRecipe(this.recipeForm.value);
   }
  }
  onCancel(){
 this.router.navigate(['../'],{relativeTo:this.route});
  }
  onDeleteIngredient(index:number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
}