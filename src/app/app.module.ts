import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './pages/project/project.component';
import { ProjectModule } from './pages/project/project.module';
import { StreamingComponent } from './pages/streaming/streaming.component';
import { StreamingModule } from './pages/streaming/streaming.module';
import { MenuComponent } from './pages/menu/menu.component';
import { MenuDetailComponent } from './pages/menu/menu-detail/menu-detail.component';
import { ShareidModule } from './pages/shareid/shareid.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareinfoModule } from './pages/shareinfo/shareinfo.module';
import { ShareinfoListComponent } from './pages/shareinfo/shareinfo-list/shareinfo-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuDetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareidModule,
    ShareinfoModule,
    ProjectModule,
    BrowserAnimationsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
