import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.less'],
  templateUrl: './pages.component.html',
})
export class PagesComponent {

  constructor(public router: Router) {}

  searchValue?: string;

  currentMenuName: string = '工作台';

  menus = [
    {
      name: '工作台',
      icon: 'assets/images/menu_icon11.png',
      active: 'assets/images/menu_icon12.png',
      path: '/pages/workbench',
    },
    {
      name: '通讯录',
      icon: 'assets/images/menu_icon21.png',
      active: 'assets/images/menu_icon22.png',
      path: '/pages/members',
    },
    {
      name: '我的消息',
      icon: 'assets/images/menu_icon31.png',
      active: 'assets/images/menu_icon32.png',
      path: '/pages/messages',
    },
    {
      name: '我的待办',
      icon: 'assets/images/menu_icon41.png',
      active: 'assets/images/menu_icon42.png',
      path: '/pages/todo',
    },
    {
      name: '系统设置',
      icon: 'assets/images/menu_icon51.png',
      active: 'assets/images/menu_icon52.png',
      path: '/pages/setting',
    },
  ];

  copyRightText = 'Copyright©2021-2022 建设单位：相城区信息中心';

  search = () => {
    console.log(this.searchValue)
  }

  logout() {
    this.router.navigate(['/login']);
  }

  handleClickMenu(currentMenuName: string) {
    this.currentMenuName = currentMenuName;
  }
}
