import { Component, Input } from '@angular/core';

interface Menu {
  name: string,
  icon: string,
  details: MenuDetail[]
}

interface MenuDetail {
  name: string,
  url: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-end';
  menushow: boolean = true;
  arrowdown: boolean = false;
  menus: Menu[] = [
    {
      name: '업무',
      icon: 'settings',
      details: [
        {
          name : '프로젝트 관리',
          url: 'project'
        },
        {
          name: '공유 아이디 관리',
          url: 'shareid'
        },
        {
          name: '공유 정보 관리',
          url: 'shareinfo'
        }]
    },
    {
      name: '출석관리',
      icon: 'settings',
      details: [
        {
          name: '출석체크',
          url: 'project'
        },
        {
          name:'캘린더',
          url: 'shareid',
         },
         {
           name: '출석대장',
           url: 'streaming'
         } 
        ]
    },
    {
      name: '비용관리',
      icon: 'settings',
      details: []
    },
    {
      name: '인사관리',
      icon: 'settings',
      details: [
        {
          name: '직원관리',
          url: 'streaming'
        },
        {
          name: '팀 관리',
          url: 'dashboard',
        },
        {
          name: '직급관리',
          url: 'project'
        }
      ]
    }
  ]
}

