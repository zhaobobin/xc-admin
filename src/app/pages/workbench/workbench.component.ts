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
      name: '统一门户',
      host: '政务网',
      desc: '以用户信息为基础，提供统一平台登录界面，提供个人门户功能',
      icon: 'assets/images/app_icon_01.png',
      iconColor: '#44CD99',
      group: '苏州相城区信息中心',
      date: '3天前登录过'
    },
    {
      name: '统一门户',
      host: '政务网',
      desc: '政务通',
      icon: 'assets/images/app_icon_02.png',
      iconColor: '#FBC465',
      group: '苏州相城区信息中心',
      date: '3天前登录过'
    },
    {
      name: '统一门户',
      host: '政务网',
      desc: '以用户信息为基础，提供统一平台登录界面，提供个人门户功能',
      icon: 'assets/images/app_icon_01.png',
      iconColor: '#F18C9F',
      group: '苏州相城区信息中心',
      date: '3天前登录过'
    },
    {
      name: '统一门户',
      host: '政务网',
      desc: '政务通',
      icon: 'assets/images/app_icon_02.png',
      iconColor: '#5DB1FF',
      group: '苏州相城区信息中心',
      date: '3天前登录过'
    },
    {
      name: '统一门户',
      host: '政务网',
      desc: '以用户信息为基础，提供统一平台登录界面，提供个人门户功能',
      icon: 'assets/images/app_icon_01.png',
      iconColor: '#8EA8FD',
      group: '苏州相城区信息中心',
      date: '3天前登录过'
    },
    {
      name: '统一门户',
      host: '政务网',
      desc: '政务通',
      icon: 'assets/images/app_icon_02.png',
      iconColor: '#F57658',
      group: '苏州相城区信息中心',
      date: '3天前登录过'
    },
  ];

  todoList: any[] = [];

  initTodoList = () => {
    const arr = [];
    const data = {
      title: '人力资源招聘会人员名单录入',
      desc: '人力资源招聘会人员名单录入'
    }
    for (let i = 1; i <= 5; i++) {
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
    for (let i = 1; i <= 5; i++) {
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
    this.initTodoList();
    this.initNoticeList();
  }
  
}
