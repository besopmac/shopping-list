import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Roast Chicken',
      'Lorem ipsum sit amet.',
      'http://images.media-allrecipes.com/userphotos/960x960/3902654.jpg'
    ),
    new Recipe(
      'Chicken Stew',
      'Lorem ipsum sit amet.',
      'http://images.media-allrecipes.com/userphotos/960x960/4066907.jpg'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
