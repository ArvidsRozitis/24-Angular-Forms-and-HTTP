import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface AnimalsSelection {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-animal-form',
  templateUrl: './add-animal-form.component.html',
  styleUrls: ['./add-animal-form.component.scss'],
})
export class AddAnimalFormComponent {
  animals: AnimalsSelection[] = [
    { value: 'cat', viewValue: 'CAT' },
    { value: 'dog', viewValue: 'DOG' },
  ];

  addAnimalsForm = new FormGroup({
    animalName: new FormControl('', [Validators.required]),
    animalsSelection: new FormControl(this.animals[0], [Validators.required]),
  });

  @Output() addAnimal = new EventEmitter<{
    animalName: string;
    animalType: string;
  }>();

  sendNewAnimal() {
    const newAnimal = {
      animalName: this.addAnimalsForm.get('animalName')!.value!,
      animalType: this.addAnimalsForm.get('animalsSelection')!.value!.value,
    };
    this.addAnimal.emit(newAnimal);
  }

}
