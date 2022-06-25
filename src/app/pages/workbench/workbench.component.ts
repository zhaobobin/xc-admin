import { Component } from '@angular/core';

@Component({
  selector: 'workbench',
  templateUrl: './workbench.component.html',
  styleUrls: ['../pages.component.less', './workbench.component.less']
})
export class WorkbenchComponent {
  title = '工作台';

  tabKey = 'notice';

  basicInfo = {
    headUrl: 'assets/images/account2.png',
    dateText: '今天是2022年4月22日 星期五',
    welcomeText1: '您好，欢迎登陆！',
    welcomeText2: '请开启一天的工作吧！',
  }

  myList = [
    {
      name: '政务OA',
      subTitle: '信息中心',
      host: '政务网',
      icon: 'assets/images/workbench/app_icon_1.png'
    },
    {
      name: '产业项目监管平台',
      subTitle: '信息中心',
      host: '政务网',
      icon: 'assets/images/workbench/app_icon_2.png'
    },
    {
      name: '流调系统',
      subTitle: '信息中心',
      host: '政务网',
      icon: 'assets/images/workbench/app_icon_3.png'
    },
    {
      name: '产业项目监管平台',
      subTitle: '信息中心',
      host: '政务网',
      icon: 'assets/images/workbench/app_icon_4.png'
    },

    {
      name: '流调系统',
      subTitle: '信息中心',
      host: '政务网',
      icon: 'assets/images/workbench/app_icon_5.png'
    },
    {
      name: '流调系统',
      subTitle: '信息中心',
      host: '政务网',
      icon: ''
    },
    {
      name: '统一门户',
      subTitle: '信息中心',
      host: '政务网',
      icon: 'assets/images/workbench/app_icon_4.png'
    },
    {
      name: '流调系统',
      subTitle: '信息中心',
      host: '政务网',
      icon: 'assets/images/workbench/app_icon_6.png'
    },
  ];

  othersList = [
    {
      name: '政务OA',
      subTitle: '信息中心',
      host: '政务网',
      icon: 'assets/images/workbench/app_icon_1.png'
    },
    {
      name: '产业项目监管平台',
      subTitle: '信息中心',
      host: '政务网',
      icon: 'assets/images/workbench/app_icon_2.png'
    },
    {
      name: '流调系统',
      subTitle: '信息中心',
      host: '政务网',
      icon: 'assets/images/workbench/app_icon_3.png'
    },
    {
      name: '产业项目监管平台',
      subTitle: '信息中心',
      host: '政务网',
      icon: 'assets/images/workbench/app_icon_4.png'
    },

    {
      name: '政务OA',
      subTitle: '信息中心',
      host: '政务网',
      icon: 'assets/images/workbench/app_icon_1.png'
    },
    {
      name: '产业项目监管平台',
      subTitle: '信息中心',
      host: '政务网',
      icon: 'assets/images/workbench/app_icon_2.png'
    },
    {
      name: '流调系统',
      subTitle: '信息中心',
      host: '政务网',
      icon: 'assets/images/workbench/app_icon_3.png'
    },
    {
      name: '产业项目监管平台',
      subTitle: '信息中心',
      host: '政务网',
      icon: 'assets/images/workbench/app_icon_4.png'
    },
  ];

  directList = [
    {
      name: '政务OA',
      subTitle: '信息中心',
      host: '政务网',
      icon: 'assets/images/workbench/app_icon_1.png'
    },
    {
      name: '产业项目监管平台',
      subTitle: '信息中心',
      host: '政务网',
      icon: 'assets/images/workbench/app_icon_2.png'
    },
    {
      name: '流调系统',
      subTitle: '信息中心',
      host: '政务网',
      icon: 'assets/images/workbench/app_icon_3.png'
    },
    {
      name: '产业项目监管平台',
      subTitle: '信息中心',
      host: '政务网',
      icon: 'assets/images/workbench/app_icon_4.png'
    },

    {
      name: '政务OA',
      subTitle: '信息中心',
      host: '政务网',
      icon: 'assets/images/workbench/app_icon_1.png'
    },
    {
      name: '产业项目监管平台',
      subTitle: '信息中心',
      host: '政务网',
      icon: 'assets/images/workbench/app_icon_2.png'
    },
    {
      name: '流调系统',
      subTitle: '信息中心',
      host: '政务网',
      icon: 'assets/images/workbench/app_icon_3.png'
    },
    {
      name: '产业项目监管平台',
      subTitle: '信息中心',
      host: '政务网',
      icon: 'assets/images/workbench/app_icon_4.png'
    },
  ];

  newsList: any[] = [];

  todoList: any[] = [];

  initNewsList = () => {
    const arr = [];
    const data = {
      title: '关于做好区行政中心常态化防疫的通知',
      date: '2022-09-08',
    }
    for (let i = 1; i <= 6; i++) {
      const item = {
        key: i,
        ...data,
        title: i <= 2 ? '关于做好区行政中心常态化防疫的通知' : '关于举办“政务服务一体化·政银惠通同城办”项目启动仪式',
        icon: `assets/images/app_icon_${i}.png`,
        hot: i === 1,
        new: i === 2
      }
      arr.push(item);
    }
    this.newsList = arr;
  }

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
      time: '2022-04-26',
    }
    for (let i = 1; i <= 7; i++) {
      const item = {
        key: i,
        new: Boolean(i <= 2),
        ...data,
        title: i <=2 ? '关于做好区行政中心常态化防疫的通知' : '关于举办“政务服务一体化·政银惠通同城办”项目启动仪式'
      }
      arr.push(item);
    }
    this.noticeList = arr;
  }

  ngOnInit() {
    this.initNewsList();
    this.initTodoList();
    this.initNoticeList();
  }
  
  changeTabKey(tabKey: string) {
    this.tabKey = tabKey;
  }

}
