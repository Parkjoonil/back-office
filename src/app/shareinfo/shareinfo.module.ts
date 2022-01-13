import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareinfoComponent } from './shareinfo.component';
import { ShareinfoCardComponent } from './shareinfo-card/shareinfo-card.component';



@NgModule({
  declarations: [
    ShareinfoComponent,
    ShareinfoCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShareinfoModule { }
