import { Component, Input, OnInit } from '@angular/core';
import { IShareinfoDTO } from 'src/app/interfaces/dtos/shareinfo.dto';
import { Shareinfo } from 'src/app/interfaces/Shareinfo.interface';
import { ShareinfoService } from 'src/app/providers/shareinfo/shareinfo.service';

type modalStatus = 'none' | 'create' | 'update' | 'delete';

@Component({
  selector: 'app-shareinfo',
  templateUrl: './shareinfo.component.html',
  styleUrls: ['./shareinfo.component.scss']
})
export class ShareinfoComponent implements OnInit {

  shareinfos: IShareinfoDTO.Response.Shareinfo[] = [];

  modalStatus: modalStatus = 'none';

  constructor(
    private shareinfoService: ShareinfoService,
  ) { }

  ngOnInit(): void {
    this.getShareinfos();
  }

  getShareinfos() {
    setTimeout(() => {
      this.shareinfoService.getShareinfo().subscribe((shareinfos) => {
        this.shareinfos = shareinfos;
      });
    }, 50);
  }

}
