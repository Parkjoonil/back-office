import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IShareinfoDTO } from 'src/app/interfaces/dtos/shareinfo.dto';


@Component({
  selector: 'app-shareinfo-list',
  templateUrl: './shareinfo-list.component.html',
  styleUrls: ['./shareinfo-list.component.scss']
})
export class ShareinfoListComponent implements OnInit {

  @Input()
  shareinfos: IShareinfoDTO.Response.Shareinfo[] = [];

  @Output()
  refresh = new EventEmitter<any>();

  constructor(
  ) { }

  ngOnInit(): void {
  }

  console(e: any){
    this.refresh.emit(e)
  }
}
