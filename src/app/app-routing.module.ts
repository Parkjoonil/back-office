import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsettingComponent } from './projectsetting/projectsetting.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { StreamingComponent } from './streaming/streaming.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsettingComponent
  },
  {
    path: 'streaming',
    component: StreamingComponent
  },
  {
    path: 'schedule',
    component: ScheduleComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'projectsetting',
    component: ProjectsettingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
