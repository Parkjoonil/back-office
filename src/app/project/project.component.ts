import { Component, OnInit } from '@angular/core';
import { Project } from '../interfaces/Project.interface';

type Status = '대기' | '중' | '완료';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  project_waits: Project[] = [
    {
      name: 'Lepisode 백오피스',
      status: '대기'
    },
  ]
  
  project_ings: Project[] = [
    {
      name: 'whatday-운동수행 어플리케이션',
      status: '중',
      start_at: new Date()
    },
    {
      name: 'LEPISODE 홈페이지',
      status: '중',
      start_at: new Date()
    },
    {
      name: '포트폴리오 (2차제작)',
      status: '중',
      start_at: new Date()
    },
  ]
  
  project_completes: Project[] = [
    {
      name: '전남도청 조직도 앱',
      status: '완료',
      start_at: new Date(),
      end_at: new Date()
    },
  ]

  constructor() { }


  ngOnInit(): void {
  }
  
}
