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
      icon: 'assets/images/menu_icon01.svg',
      path: '/pages/workbench',
    },
    {
      name: '用户管理',
      icon: 'assets/images/menu_icon02.svg',
      path: '/pages/user',
    },
    {
      name: '单位管理',
      icon: 'assets/images/menu_icon03.svg',
      path: '/pages/company',
    },
    {
      name: '科室管理',
      icon: 'assets/images/menu_icon04.svg',
      path: '/pages/department',
    },
    {
      name: '应用管理',
      icon: 'assets/images/menu_icon05.svg',
      path: '/pages/application',
    },
  ];

  menus2 = [
    {
      name: '工作台',
      icon: 'assets/images/menu_icon12.png',
      path: '/pages/workbench',
    },
    {
      name: '用户管理',
      icon: 'assets/images/menu_icon22.png',
      path: '/pages/user',
    },
    {
      name: '单位管理',
      icon: 'assets/images/menu_icon32.png',
      path: '/pages/company',
    },
    {
      name: '科室管理',
      icon: 'assets/images/menu_icon42.png',
      path: '/pages/department',
    },
    {
      name: '应用管理',
      icon: 'assets/images/menu_icon52.png',
      path: '/pages/application',
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
