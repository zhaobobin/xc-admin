import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component2.less'],
  templateUrl: './pages.component2.html',
})
export class PagesComponent {

  constructor(public router: Router) {}

  searchValue?: string;

  menus = [
    {
      name: '工作台',
      icon: 'assets/images/menu_icon01.png',
      path: '/pages/workbench',
    },
    {
      name: '用户管理',
      icon: 'assets/images/menu_icon02.png',
      path: '/pages/user',
    },
    {
      name: '单位管理',
      icon: 'assets/images/menu_icon03.png',
      path: '/pages/company',
    },
    {
      name: '科室管理',
      icon: 'assets/images/menu_icon04.png',
      path: '/pages/department',
    },
    {
      name: '应用管理',
      icon: 'assets/images/menu_icon05.png',
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
}
