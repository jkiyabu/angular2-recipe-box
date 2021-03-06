import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="jumbotron">
      <h1>Recipe Box</h1>
    </div>
    <img src="resources/images/patrick.gif">
    <h3>{{currentFocus}} for {{month}}/{{day}}/{{year}}</h3>
    <div class="row">
      <ul>
        <div class="title" (click)="showDetails(currentRecipe)" *ngFor="let currentRecipe of recipes">
        <h2>{{currentRecipe.title}}</h2>
        </div>
      </ul>
    </div>
    <br>
    <div *ngIf="selectedRecipe">
      <h3>Ingredients for {{selectedRecipe.title}}</h3>
      <ul>
        <li>{{selectedRecipe.ingredients}}</li>
      </ul>
      <ul>
        <li>{{selectedRecipe.directions}}</li>
      </ul>
      <button class="btn"(click)="editRecipe(selectedRecipe)">Edit!</button>
      <button class="btn"(click)="finishedViewing()">Hide</button>
    </div>

    <div *ngIf="editedRecipe">
      <h3>Edit Recipe</h3>
      <label>Enter Recipe Title:</label>
      <input [(ngModel)]="editedRecipe.title">
      <br>

      <label>Enter Ingredients:</label>
      <input [(ngModel)]="editedRecipe.ingredients">
      <br>

      <label>Enter Directions:</label>
      <input [(ngModel)]="editedRecipe.directions">
      <br>

      <button (click)="finishedEditing()">Done</button>
    </div>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  recipes: Recipe[] = [
    new Recipe("Mac and Cheese", ["macaroni", " cheese"], "Add cheese to macaroni and cook"),
    new Recipe("Tacos", ["tortilla", " meat", " cheese", " lettuce"], "Place ingredients in taco shell"),
    new Recipe("Chicken noodle soup", ["can of soup"], "open can and place in bowl")
  ];

  editedRecipe = null;
  selectedRecipe = null;

  editRecipe(clickedRecipe) {
    this.editedRecipe = clickedRecipe;
  }

  showDetails(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }

  finishedEditing() {
    this.editedRecipe = null;
  }

  finishedViewing() {
    this.selectedRecipe = null;
  }

}

export class Recipe {
  constructor(public title: string, public ingredients: any, public directions: string) {}
}
