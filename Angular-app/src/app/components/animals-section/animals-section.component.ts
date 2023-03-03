import { Component } from '@angular/core';
import {
  AnimalsService,
  AnimalsInterface,
  PostAnimalInterface,
} from 'src/app/sevices/animals.service';

@Component({
  selector: 'app-animals-section',
  templateUrl: './animals-section.component.html',
  styleUrls: ['./animals-section.component.scss'],
})
export class AnimalsSectionComponent {
  constructor(private apiAnimalService: AnimalsService) {}
  animals: AnimalsInterface[] = [];

  getAnimals() {
    this.apiAnimalService.getAnimalsData().subscribe((res) => {
      this.animals = res;
    });
  }

  ngOnInit() {
    this.getAnimals();
  }

  deleteAnimal = (id: string) => {
    this.apiAnimalService.deleteAnimal(id).subscribe((response) => {
      console.log('Server response', response);
      this.getAnimals();
    });
  };

  onSubmit(newAnimal: PostAnimalInterface) {
    this.apiAnimalService.addAnimal(newAnimal).subscribe((response) => {
      console.log('Server response', response);
      this.getAnimals();
    });
  }

  showOnlyCats(filter: boolean) {
    console.log('rādi kaķus', filter);
    if (!filter) {
      this.apiAnimalService.filterAnimals('cat').subscribe((response) => {
        console.log('Server response', response);
        this.animals = response
      })
    } else {
      this.getAnimals()
    }
  }
}
