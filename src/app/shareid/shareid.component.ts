import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, Input, OnInit } from '@angular/core';

interface Shareidid {
  head: string;
  object: string;
  company: string;
  id: string;
  password: string;
  reference: string;
  fax: string;
  url: string;
}

@Component({
  selector: 'app-shareid',
  templateUrl: './shareid.component.html',
  styleUrls: ['./shareid.component.scss']
})
export class ShareidComponent implements OnInit {

  shareidids: Shareidid[] = [
    {
      head: '스마트스토어',
      object: '스토어관리',
      company: 'JRI 네이버 스마트스토어',
      id: 'manwolfarm@naver.com',
      password: '88782314p*',
      reference: '-- --',
      fax: '062 0154 1544',
      url: 'http://wpsolar.cafe24.com/administrator'
    },
    {
      head: '산돌구름',
      object: '디자인-폰트',
      company: '구름다리',
      id: 'jusung@surhyun.com',
      password: '88782314p*',
      reference: '2022년 2월 9일 10시 40분 만료',
      fax: '062 1544 1544',
      url: 'http://wpsolar.cafe24.com/administrator'
    },
    {
      head: '로젠택배',
      object: '택배관리',
      company: 'IROGEN',
      id: '60150107',
      password: '88782314p*',
      reference: '-- --',
      fax: '-- --',
      url: '-- --'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
