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
  selector: 'app-shareid-detail',
  templateUrl: './shareid-detail.component.html',
  styleUrls: ['./shareid-detail.component.scss']
})
export class ShareidDetailComponent implements OnInit {


  @Input()
  shareids: Shareidid ={
    head: '',
    object: '',
    company: '',
    id: '',
    password: '',
    reference: '',
    fax: '',
    url: ''
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
