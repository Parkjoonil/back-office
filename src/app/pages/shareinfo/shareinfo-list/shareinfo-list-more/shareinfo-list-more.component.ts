import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shareinfo-list-more',
  templateUrl: './shareinfo-list-more.component.html',
  styleUrls: ['./shareinfo-list-more.component.scss']
})
export class ShareinfoListMoreComponent implements OnInit {


  @Input()
  isOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
