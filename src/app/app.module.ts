import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { ObjectiveComponent } from './components/home/objective/objective.component';
import { InstructorComponent } from './components/home/instructor/instructor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CarouselComponent,
    ObjectiveComponent,
    InstructorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
