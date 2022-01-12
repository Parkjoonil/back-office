import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shareid-detail',
  templateUrl: './shareid-detail.component.html',
  styleUrls: ['./shareid-detail.component.scss']
})
export class ShareidDetailComponent implements OnInit {

  @Input('head')
  head: string = '';

  @Input('object')
  object: string = '';

  @Input('company')
  company: string = '';

  @Input('id')
  id: string = '';

  @Input('password')
  password: string = '';

  @Input('reference')
  reference: string = '';

  @Input('fax')
  fax: string = '';

  @Input('url')
  url: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
