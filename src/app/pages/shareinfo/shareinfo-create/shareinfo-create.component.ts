import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ShareinfoService } from 'src/app/providers/shareinfo/shareinfo.service';

@Component({
  selector: 'app-shareinfo-create',
  templateUrl: './shareinfo-create.component.html',
  styleUrls: ['./shareinfo-create.component.scss']
})
export class ShareinfoCreateComponent implements OnInit {

  name = new FormControl('');
  information = new FormControl('');
  color = new FormControl('');
  type = new FormControl('');

  @Input()
  isOpen: boolean = false;

  @Output()
  closeModal = new EventEmitter<any>();

  constructor(
    private shareinfoService: ShareinfoService
  ) { }

  ngOnInit(): void {
  }

  closingModal() {
    this.closeModal.emit();
  }

  createInfo(){
    let color;
    this.type.value === '사업자번호' ? color = 'bg-indigo-500' : color = 'bg-teal-500';

    this.shareinfoService.createShareinfo({
      name: this.name.value,
      color: color,
      information: this.information.value,
      type: this.type.value,
    }).subscribe(result => {
      this.name.reset();
      this.color.reset();
      this.information.reset();
      setTimeout(() => {
        return this.closingModal();
      }, 50)
    })
  }
}
