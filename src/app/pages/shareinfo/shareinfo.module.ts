import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareinfoComponent } from './shareinfo.component';
import { ShareinfoListComponent } from './shareinfo-list/shareinfo-list.component';
import { ShareinfoListMoreComponent } from './shareinfo-list/shareinfo-list-more/shareinfo-list-more.component';
import { OutsideClickDirectiveShareinfo } from 'src/app/directives/outside-click.directiveshareinfo';
import { ShareinfoCreateComponent } from './shareinfo-create/shareinfo-create.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ShareinfoComponent,
    ShareinfoListComponent,
    ShareinfoListMoreComponent,
    OutsideClickDirectiveShareinfo,
    ShareinfoCreateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ShareinfoModule { }
