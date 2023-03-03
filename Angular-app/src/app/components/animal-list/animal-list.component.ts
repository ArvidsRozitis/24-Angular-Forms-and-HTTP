import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AnimalsInterface } from 'src/app/sevices/animals.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss'],
})
export class AnimalListComponent {
  @Output() deleteRequest: EventEmitter<string> = new EventEmitter();
  @Input() animals!: AnimalsInterface[];
}
