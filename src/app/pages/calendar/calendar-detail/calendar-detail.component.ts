import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CalendarService } from 'src/app/providers/calendar/calendar.service';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import 'moment/locale/ko';
import { ICalendarDTO } from 'src/app/interfaces/dtos/calendar.dto';
import { AppService } from 'src/app/providers/app/app.service';
import { IEmployeeDTO } from 'src/app/interfaces/dtos/employee.dto';
import { cmsAnimations } from 'src/app/animations/animations';

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD',
  },
  display: {
    dateInput: 'YYYY.MM.DD',
    monthYearLabel: 'YYYY.MM',
  },
};

@Component({
  selector: 'app-calendar-detail',
  templateUrl: './calendar-detail.component.html',
  styleUrls: ['./calendar-detail.component.scss'],
  providers: [
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
  animations: [cmsAnimations],
})
export class CalendarDetailComponent implements OnInit {

  @Input()
  isOpen: boolean = false;

  @Input()
  list: ICalendarDTO.Response.Calendar[] = [];

  @Input()
  employeeList: IEmployeeDTO.Response.Employee[] = [];

  @Output()
  closeModal = new EventEmitter<any>();

  attendanceStatus = new FormControl('');
  date = new FormControl('');
  selectedId = new FormControl('');

  todayindex: number = 0;

  dateString: string = '';
  checkDay: string = '';

  Today = new Date();

  userToday: string = '';
  userAttendanceTime: string = '';
  userReferenceNum: number = 0;
  userReference: string = '';
  userStatus: number = 0;

  constructor(
    private calendarService: CalendarService,
    private usernameService: AppService,
  ) { }

  ngOnInit(): void { 

  }


  closingModal() {
    this.attendanceStatus.patchValue('');
    this.date.patchValue('');
    this.selectedId.patchValue('');
    this.closeModal.emit();
    
  }

  createCalendar() {
    if(this.attendanceStatus.value === '') return alert("항목을 선택해 주세요.");
    else if(this.attendanceStatus.value === '출석') {
      this.checkDay = `${this.Today.getFullYear()}-${this.Today.getMonth()<10?'0':''}${this.Today.getMonth() + 1}-${this.Today.getDate()<10?'0':''}${this.Today.getDate()}`;
      this.todayindex = this.list.findIndex((user) => user.employeename_id === parseInt(this.selectedId.value) && user.date === this.checkDay);
      if(this.todayindex != -1) return alert("이미 출석체크 하였습니다.");
      else {
        this.userReferenceNum = (this.Today.getHours() - this.usernameService.endTimeHour) * 60 + (this.Today.getMinutes() - this.usernameService.endTimeMinute);
        this.userReference = `${this.userReferenceNum>0?'+':''}${this.userReferenceNum}`;
        this.userAttendanceTime = `${this.Today.getHours()}:${this.Today.getMinutes()<10?'0':''}${this.Today.getMinutes()}`;   
        this.userToday = this.checkDay;
        if(this.userReferenceNum < 0) this.userStatus = 1;
        else if(this.userReferenceNum == 0) this.userStatus = 2;
        else this.userStatus = 3;
      }
    }    
    else if(this.attendanceStatus.value === '연차') {
      this.checkDay = `${this.date.value._i.year}-${this.date.value._i.month+1<10?'0':''}${this.date.value._i.month+1}-${this.date.value._i.date<10?'0':''}${this.date.value._i.date}`;
      this.todayindex = this.list.findIndex((user) => user.date === this.checkDay);
      if(this.todayindex != -1) return alert("해당 날짜에 이미 병가 혹은 연차 처리되었습니다.");
      else {
        this.userStatus = 4;
        this.userAttendanceTime = '-- --';
        this.userReference = '연차사용';
        this.userToday = this.checkDay;
      }
    }
    else {
      this.checkDay = `${this.date.value._i.year}-${this.date.value._i.month+1<10?'0':''}${this.date.value._i.month+1}-${this.date.value._i.date<10?'0':''}${this.date.value._i.date}`;
      this.todayindex = this.list.findIndex((user) => user.date === this.checkDay);
      if(this.todayindex != -1) return alert("해당 날짜에 이미 병가 혹은 연차 처리되었습니다.");
      else {
        this.userStatus = 5;
        this.userAttendanceTime = '-- --';
        this.userReference = '병가사용';
        this.userToday = this.checkDay;
      }
    }
    const params: ICalendarDTO.Request.CreateCalendar = {
      date: this.userToday,
      attendancetime: this.userAttendanceTime,
      reference: this.userReference,
      status: this.userStatus,
      employeename_id: this.selectedId.value,

    }
      this.calendarService.createCalendar(params).subscribe(result => {
        this.date.reset();
        this.attendanceStatus.reset();
        this.selectedId.reset();

        setTimeout(() => {
          return this.closingModal();
        }, 50)
      });     
  }
}
