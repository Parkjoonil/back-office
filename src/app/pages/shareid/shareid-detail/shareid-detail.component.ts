import { Component, Input, OnInit } from '@angular/core';
import { Shareid } from 'src/app/interfaces/Shareid.interface';

@Component({
  selector: 'app-shareid-detail',
  templateUrl: './shareid-detail.component.html',
  styleUrls: ['./shareid-detail.component.scss']
})
export class ShareidDetailComponent implements OnInit {


  @Input()
  shareid: Shareid = {
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
