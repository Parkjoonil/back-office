import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProjectComponent } from './project.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectDetailMoreComponent } from './project-detail/project-detail-more/project-detail-more.component';
import { OutsideClickDirective } from '../directives/outside-click.directive';

@NgModule({
  declarations: [
    ProjectComponent,
    ProjectDetailComponent,
    ProjectDetailMoreComponent,
    OutsideClickDirective
  ],
  imports: [
    CommonModule,
    
  ]
})
export class ProjectModule { }
