import { Component, Input, OnInit } from '@angular/core';

interface Project {
  name: string;
  status: Status;
  start_at?: Date;
  end_at?: Date;
}



type Status = '대기' | '중' | '완료';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  @Input()
  projects: Project[] = [{
    name: '',
    status: '대기',
    start_at: new Date(),
    end_at: new Date()
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
