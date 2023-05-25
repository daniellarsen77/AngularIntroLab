import { Component } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Unit_8_Intro_To_Angular_Lab';

  // Array of menu items
  items: MenuItem[] = [
    { name: "Chicken Fingers", category: "dinner", price: 11.99 },
    { name: "Pizza", category: "dinner", price: 11.99 },
    { name: "Wings", category: "sides", price: 8.99 },
    { name: "Breadsticks", category: "sides", price: 4.99 },
    { name: "Caesar Salad", category: "salads", price: 5.99 },
    { name: "Cinnamon Roll", category: "dessert", price: 8.99 }
  ];

  // Array of categories, initially set to all items
  categories: MenuItem[] = this.items;

  // Retrieves items by category and updates the 'categories' array accordingly
  getByCategory(elementId: string): void {
    // Get the category value from the HTML element
    let cat = (document.getElementById(elementId) as HTMLInputElement).value;
    this.categories = [];

    // Loop through all items and filter based on the selected category
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].category == cat?.toLowerCase()) {
        this.categories.push(this.items[i]);
      }
    }
  }

  // Retrieves items of a specific category and returns them as an array
  getCategory(cat: string): MenuItem[] {
    let categ: MenuItem[] = [];
    
    // Loop through all items and filter based on the specified category
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].category == cat.toLowerCase()) {
        categ.push(this.items[i]);
      }
    }
    return categ;
  }

  // Retrieves unique categories from the items and returns them as a Set
  getUniqueCategories(): Set<string> {
    let cats: Set<string> = new Set();
    
    // Loop through all items and add their categories to the set
    for (let i = 0; i < this.items.length; i++) {
      cats.add(this.items[i].category);
    }
    return cats;
  }

  // Clears the category filter and sets 'categories' to contain all items
  clearCategory(): void {
    this.categories = this.items;
  }
}
