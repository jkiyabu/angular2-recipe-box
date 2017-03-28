import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Recipe Box</h1>
    <h3>{{currentFocus}} for {{month}}/{{day}}/{{year}}</h3>
    <ul>
      <li *ngFor="let currentRecipe of recipes">{{currentRecipe.title}}
        <ul>
          <li>{{currentRecipe.ingredients}}</li>
        </ul>
        <ul>
          <li>{{currentRecipe.directions}}</li>
        </ul>
      </li>
    </ul>
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
}

export class Recipe {
  constructor(public title: string, public ingredients: any, public directions: string) {}
}
