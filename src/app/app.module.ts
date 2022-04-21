import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { ObjectiveComponent } from './components/home/objective/objective.component';
import { InstructorComponent } from './components/home/instructor/instructor.component';
import { ContactComponent } from './components/home/contact/contact.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { YearComponent } from './pages/year/year.component';
import { ModuleComponent } from './pages/module/module.component';
import { VideosComponent } from './pages/videos/videos.component';
import { BooksComponent } from './pages/books/books.component';
import { BookComponent } from './pages/book/book.component';
import { AppRoutingModule } from './routers/app-routing.module';
import { CompetitionsComponent } from './pages/competitions/competitions.component';
import { SemesterComponent } from './components/year/semester/semester.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CarouselComponent,
    ObjectiveComponent,
    InstructorComponent,
    ContactComponent,
    FooterComponent,
    YearComponent,
    ModuleComponent,
    VideosComponent,
    BooksComponent,
    BookComponent,
    CompetitionsComponent,
    SemesterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
