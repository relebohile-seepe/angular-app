import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/Hero';
import { ApiService } from 'src/app/service/api.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  heroes: Hero[] = [];
  updatedHero: Hero | null = null; 
    // Define an array of custom table options.
    customTableOptions = ['A', 'B', 'C', 'D'];

  constructor(private heroService: ApiService, private http: HttpClient) {}

  ngOnInit() {
    // Getting the Hero information when the component initializes
    this.heroService.getUsers().subscribe((heroes) => {
      this.heroes = heroes;
    });

    // Call a function to select a random style option.
    this.selectRandomTableOption();
  }

// Function to send a POST request to evolve a hero
// In your component
submitHeroAction(heroName: string) {
  this.heroService.postHeroAction(heroName).subscribe(
    (response) => {
      // Handle the response, which will be the evolved hero
      this.updatedHero = response;
      console.log('POST request successful', response);
    },
    (error) => {
      console.error('Error making POST request', error);
    }
  );
}

// Initialize the selected option with a default value.
selectedOption: string = 'A';

  // Function to select a random table styling option and apply it.
  // Everytime the Angular application loads, the table data background
  // color will change, along with the font weight etc
  selectRandomTableOption() {
    // Randomly select an option from the customTableOptions array.
    const randomIndex = Math.floor(Math.random() * this.customTableOptions.length);
    this.selectedOption = this.customTableOptions[randomIndex];
  }



}
