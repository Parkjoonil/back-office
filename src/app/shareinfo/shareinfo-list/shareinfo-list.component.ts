import { Component, Input, OnInit } from '@angular/core';
import { Shareinfo } from 'src/app/interfaces/Shareinfo.interface';


@Component({
  selector: 'app-shareinfo-list',
  templateUrl: './shareinfo-list.component.html',
  styleUrls: ['./shareinfo-list.component.scss']
})
export class ShareinfoListComponent implements OnInit {

  @Input()
  shareinfos: Shareinfo[] = [
    {
      name: '',
      information: '',
      color: '',
      type: '',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
