import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface AnimalsInterface {
  _id: string;
  animalName: string;
  animalType: string;
}

export interface PostAnimalInterface {
  animalName: string;
  animalType: string;
}

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  constructor(private _http: HttpClient) {}

  getAnimalsData() {
    return this._http.get<AnimalsInterface[]>(`http://localhost:3004/animals`);
  }

  deleteAnimal(id: string): Observable<any> {
    return this._http.delete(`http://localhost:3004/animal/delete/${id}`);
  }

  addAnimal(newAnimal: PostAnimalInterface): Observable<PostAnimalInterface> {
    return this._http.post<PostAnimalInterface>(
      `http://localhost:3004/animals/post`,
      newAnimal
    );
  }
}
