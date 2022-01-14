import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProjectComponent } from './pages/project/project.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { ShareidComponent } from './pages/shareid/shareid.component';
import { ShareinfoComponent } from './pages/shareinfo/shareinfo.component';
import { ShareinfoModule } from './pages/shareinfo/shareinfo.module';
import { StreamingComponent } from './pages/streaming/streaming.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent
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
