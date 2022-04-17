import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {
  instructorImage:string = "assets/images/instructor.jpg";
  logo:string = "assets/images/logo.png";
  constructor() { }

  ngOnInit(): void {
  }

}
