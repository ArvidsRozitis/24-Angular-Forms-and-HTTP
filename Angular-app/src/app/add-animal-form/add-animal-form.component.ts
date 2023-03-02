import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface Animals {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-animal-form',
  templateUrl: './add-animal-form.component.html',
  styleUrls: ['./add-animal-form.component.scss'],
})
export class AddAnimalFormComponent {
  animals: Animals[] = [
    { value: 'cat', viewValue: 'CAT' },
    { value: 'dog', viewValue: 'DOG' },
  ];

  addAnimalsForm = new FormGroup({
    animalName: new FormControl(''),
    animalsSelection: new FormControl(this.animals[0]),
  });
}
