import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuDetailComponent } from './pages/menu/menu-detail/menu-detail.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ProjectModule } from './pages/project/project.module';
import { ShareidModule } from './pages/shareid/shareid.module';
import { ShareinfoModule } from './pages/shareinfo/shareinfo.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from './pages/calendar/calendar.module';

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
    CalendarModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
