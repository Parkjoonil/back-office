import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShareinfoService } from 'src/app/providers/shareinfo/shareinfo.service';

@Component({
  selector: 'app-shareinfo-list-more',
  templateUrl: './shareinfo-list-more.component.html',
  styleUrls: ['./shareinfo-list-more.component.scss']
})
export class ShareinfoListMoreComponent implements OnInit {

  @Input()
  id: number = 0;

  @Input()
  isOpen: boolean = false;

  @Output()
  refresh = new EventEmitter<any>();

  constructor(
    private shareinfoService: ShareinfoService
  ) { }

  ngOnInit(): void {
  }

  deleteInfo(id: number){
    this.shareinfoService.deleteInfo(id).subscribe(result =>
      this.refresh.emit(true)
    )
  }
}
