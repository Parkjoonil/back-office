import { Component, OnInit } from '@angular/core';
import { Shareinfo } from '../interfaces/Shareinfo.interface';

@Component({
  selector: 'app-shareinfo',
  templateUrl: './shareinfo.component.html',
  styleUrls: ['./shareinfo.component.scss']
})
export class ShareinfoComponent implements OnInit {

  shareinfo: Shareinfo[] = [
    {
      name: '팀 레피소드',
      type: '사업자번호',
      color: 'bg-indigo-400',
      information: '02 5875103 8871'
    },
    {
      name: '도란',
      type: '사업자번호',
      color: 'bg-indigo-400',
      information: '02 5875103 8871'
    },
    {
      name: '풍기원',
      type: '사업자번호',
      color: 'bg-indigo-400',
      information: '02 5875103 8871'
    },
    {
      name: 'Title',
      type: '사업자번호',
      color: 'bg-indigo-400',
      information: '02 5875103 8871'
    },
    {
      name: '광주은행',
      type: '계좌번호',
      color: 'bg-emerald-400',
      information: '02 5875103 8871'
    },
    {
      name: '농협',
      type: '계좌번호',
      color: 'bg-emerald-400',
      information: '02 5875103 8871'
    },
    {
      name: '팀 레피소드 FAX',
      type: '팩스번호',
      color: 'bg-violet-400',
      information: '02 5875103 8871'
    },
    {
      name: '도란',
      type: '팩스번호',
      color: 'bg-violet-400',
      information: '02 5875103 8871'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
