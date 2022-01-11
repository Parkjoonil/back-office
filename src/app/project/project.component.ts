import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor() { }
  moreshow1: boolean = false;
  moreshow2: boolean = false;
  moreshow3: boolean = false;
  moreshow4: boolean = false;
  moreshow5: boolean = false;
  moreshow6: boolean = false;
  moreshow7: boolean = false;
  ngOnInit(): void {
  }
  
}
