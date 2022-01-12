import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-detail-more',
  templateUrl: './project-detail-more.component.html',
  styleUrls: ['./project-detail-more.component.scss']
})
export class ProjectDetailMoreComponent implements OnInit {

  @Input()
  isOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
