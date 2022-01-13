import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ShareidComponent } from './shareid/shareid.component';
import { ShareinfoComponent } from './shareinfo/shareinfo.component';
import { ShareinfoModule } from './shareinfo/shareinfo.module';
import { StreamingComponent } from './streaming/streaming.component';

const routes: Routes = [
  {
    path: '',
    component: StreamingComponent
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
    path: 'project',
    component: ProjectComponent
  },
  {
    path: 'shareid',
    component: ShareidComponent
  },
  {
    path: 'shareinfo',
    component: ShareinfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
