import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { YearComponent } from '../pages/year/year.component';
import { BooksComponent } from '../pages/books/books.component';
import { BookComponent } from '../pages/book/book.component';
import { ModuleComponent } from '../pages/module/module.component';
import { VideosComponent } from '../pages/videos/videos.component';
import { CompetitionsComponent } from '../pages/competitions/competitions.component';

const routes: Routes  =[
  {path:"home",component:HomeComponent },
  {path:"year/:id",component:YearComponent },
  {path:"books",component:BooksComponent },
  {path:"books/:id",component:BookComponent },
  {path:":year/:module",component:ModuleComponent },
  {path:":year/:module/videos",component:VideosComponent },
  {path:"competitions",component:CompetitionsComponent },
  {path:"",redirectTo:"home",pathMatch:"full"} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration:'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
