import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareidComponent } from './shareid.component';
import { ShareidDetailComponent } from './shareid-detail/shareid-detail.component';



@NgModule({
  declarations: [
    ShareidComponent,
    ShareidDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShareidModule { }
