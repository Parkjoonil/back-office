import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { ProjectModule } from './project/project.module';
import { StreamingComponent } from './streaming/streaming.component';
import { StreamingModule } from './streaming/streaming.module';
import { MenuComponent } from './menu/menu.component';
import { MenuDetailComponent } from './menu/menu-detail/menu-detail.component';
import { ShareidModule } from './shareid/shareid.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareinfoModule } from './shareinfo/shareinfo.module';


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
