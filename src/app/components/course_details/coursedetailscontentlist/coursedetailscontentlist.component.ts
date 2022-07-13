import { Component, OnInit } from '@angular/core';
import { faPlay } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-coursedetailscontentlist',
  templateUrl: './coursedetailscontentlist.component.html',
  styleUrls: ['./coursedetailscontentlist.component.css']
})
export class CoursedetailscontentlistComponent implements OnInit {
  faPlay = faPlay;

  constructor() { }

  ngOnInit(): void {
  }

}
