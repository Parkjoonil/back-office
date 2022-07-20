import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/Project.interface';
import { ProjectService } from 'src/app/providers/project/project.service';

type Status = '대기' | '중' | '완료';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  @Input()
  projects: Project[] = []

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.projectService.getProject();
  }

}
