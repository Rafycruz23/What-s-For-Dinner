import { Component, OnInit } from '@angular/core';
import { RECIPES } from 'src/app/Classes/recipes';
import recipes from 'src/assets/recipes.json';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RecipesComponent } from '../recipes/recipes.component';


@Component({
  selector: 'app-recipeDetail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  rp: RECIPES;

  constructor() {
    this.rp = recipes[0];
    


  }
  public getRecipe (){
  const RecipeName = localStorage.getItem('Recipe')
    for (let i = 0; i <= recipes.length; i++){
      if (RecipeName == recipes[i].name){

      }
    }
  }

  //   let name = this.router.snapshot.paramMap.get("name");
  //   getRecipe(){
  //   for (let i = 0; i <= recipes.length; i++){
  //     if (selectedRecipe === recipes[i].name){
  //       this.rp = recipes[i]
  //     }
  //   }
  
    
  // }
  ngOnInit(): void {
  }

  // getRecipe(recipe: any) {

  //   for (let i = 0; i <= recipes.length; i++) {
  //     if (recipe.name === recipes[i].name) {
  //       recipes.push(recipes[i]);
  //     }
  //   }


  // }
//   constructor(private route: ActivatedRoute, public rp: RECIPES){}

  }


// ngOnInit() {
  
//   // let name = this.route.snapshot.paramMap.get("name");
//   let name = "Bisquick Quiche"
//   console.log(name)
//   for (let i = 0; i <= recipes.length; i++){
//     if (name === recipes[i].name){
//       this.rp = recipes[i]
//     }
//   }
// this.rp = recipes[0]

// }

