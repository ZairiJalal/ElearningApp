import { Component, OnInit } from '@angular/core';
import { Semester } from 'src/app/models/semester';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {
  semesters:Semester[]=[{_id:"idTest",number:1,year_id:"idTest"},
                        {_id:"idTest",number:2,year_id:"idTest"},
                        {_id:"idTest",number:3,year_id:"idTest"},
                        {_id:"idTest",number:4,year_id:"idTest"},
                        {_id:"idTest",number:5,year_id:"idTest"},
                        {_id:"idTest",number:6,year_id:"idTest"}];

  constructor() { }

  ngOnInit(): void {
  }

}
