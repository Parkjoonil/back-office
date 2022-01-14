import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/Project.interface';
import { ProjectService } from 'src/app/providers/project/project.service';

type Status = '대기' | '중' | '완료';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  project_waits: Project[] = [];
  
  project_ings: Project[] = [];
  
  project_completes: Project[] = [];

  constructor(
    private projectService: ProjectService,
  ) { }


  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.projectService.getProject().subscribe((projects) => {
      this.project_waits = projects.filter(project => {
        return project.status === '대기'
      });
      this.project_ings = projects.filter(project => {
        return project.status === '중'
      });
      this.project_completes = projects.filter(project => {
        return project.status === '완료'
      });
    });

  }
  
}
