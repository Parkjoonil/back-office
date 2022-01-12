import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProjectComponent } from './project.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectDetailMoreComponent } from './project-detail/project-detail-more/project-detail-more.component';


@NgModule({
  declarations: [
    ProjectComponent,
    ProjectDetailComponent,
    ProjectDetailMoreComponent,

  ],
  imports: [
    CommonModule,
    
  ]
})
export class ProjectModule { }
