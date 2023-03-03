import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalListComponent } from './components/animal-list/animal-list.component';
import { AddAnimalFormComponent } from './components/add-animal-form/add-animal-form.component';
import { AnimalsSectionComponent } from './components/animals-section/animals-section.component';
import { ToggleSwitchComponent } from './components/toggle-switch/toggle-switch.component';

@NgModule({
  declarations: [AppComponent, AnimalListComponent, AddAnimalFormComponent, AnimalsSectionComponent, ToggleSwitchComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
