import { Component } from '@angular/core';

@Component({
  selector: 'workbench',
  templateUrl: './workbench.component.html',
  styleUrls: ['../pages.component.less', './workbench.component.less']
})
export class WorkbenchComponent {
  title = '工作台';

  basicInfo = {
    headUrl: 'assets/images/account2.png',
    dateText: '今天是2022年4月22日 星期五',
    welcomeText1: '您好，欢迎登陆！',
    welcomeText2: '请开启一天的工作吧！',
  }

  appList = [
    {
      name: '政务OA',
      host: '政务网',
      icon: 'assets/images/app_icon_1.png'
    },
    {
      name: '产业项目监管平台',
      host: '政务网',
      icon: 'assets/images/app_icon_2.png'
    },
    {
      name: '政务OA',
      host: '政务网',
      icon: 'assets/images/app_icon_3.png'
    },
    {
      name: '产业项目监管平台',
      host: '政务网',
      icon: ''
    },
    {
      name: '政务OA',
      host: '政务网',
      icon: 'assets/images/app_icon_3.png'
    },
    {
      name: '产业项目监管平台',
      host: '政务网',
      icon: ''
    },

    {
      name: '政务OA',
      host: '政务网',
      icon: ''
    },
    {
      name: '相城区数据共享交换平台门户',
      host: '政务网',
      icon: 'assets/images/app_icon_3.png'
    },
    {
      name: '政务OA',
      host: '政务网',
      icon: ''
    },
    {
      name: '产业项目监管平台',
      host: '政务网',
      icon: ''
    },
    {
      name: '政务OA',
      host: '政务网',
      icon: 'assets/images/app_icon_2.png'
    },
    {
      name: '产业项目监管平台',
      host: '政务网',
      icon: ''
    },
  ];

  appList2: any[] = [];

  todoList: any[] = [];

  initAppList = () => {
    const arr = [];
    const data = {
      name: '相城区数据共享交换平台门户',
      host: '政务网',
    }
    for (let i = 1; i <= 12; i++) {
      const item = {
        key: i,
        ...data,
        name: i%2 === 0 ? '相城区数据共享交换平台门户' : '统一门户',
        icon: `assets/images/app_icon_${i}.png`
      }
      arr.push(item);
    }
    this.appList2 = arr;
  }

  initTodoList = () => {
    const arr = [];
    const data = {
      title: '人力资源招聘会人员名单录入',
      desc: '人力资源招聘会人员名单录入'
    }
    for (let i = 1; i <= 4; i++) {
      const item = {
        key: i,
        ...data
      }
      arr.push(item);
    }
    this.todoList = arr;
  }

  noticeList: any[] = [];

  initNoticeList = () => {
    const arr = [];
    const data = {
      title: '关于五一劳动节放假通知',
      time: '2022-04-26 12:00',
    }
    for (let i = 1; i <= 3; i++) {
      const item = {
        key: i,
        new: Boolean(i <= 2),
        ...data,
      }
      arr.push(item);
    }
    this.noticeList = arr;
  }

  ngOnInit() {
    // this.initAppList();
    this.initTodoList();
    this.initNoticeList();
  }
  
}
