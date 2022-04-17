import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-objective',
  templateUrl: './objective.component.html',
  styleUrls: ['./objective.component.css']
})
export class ObjectiveComponent implements OnInit {
  logo:string = "assets/images/logo.png";
  objectives=["Cours","Exercices ","Examens","Vidéos","Livres","Concours"];

  constructor() { }

  ngOnInit(): void {
  }

}
