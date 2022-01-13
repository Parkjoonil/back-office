import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareinfoComponent } from './shareinfo.component';
import { ShareinfoListComponent } from './shareinfo-list/shareinfo-list.component';
import { ShareinfoListMoreComponent } from './shareinfo-list/shareinfo-list-more/shareinfo-list-more.component';



@NgModule({
  declarations: [
    ShareinfoComponent,
    ShareinfoListComponent,
    ShareinfoListMoreComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ShareinfoModule { }
