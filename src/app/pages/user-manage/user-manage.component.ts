import { Component } from '@angular/core';

interface Person {
  key: number;
  name: string;
  gender: string;
  idcard: string;
  birthdate: string;
  company: string;
  account: string;
}
@Component({
  selector: 'user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['../pages.component.less', './user-manage.component.less']
})
export class UserManageComponent {
  title = '用户管理';
  
  listOfData: Person[] = [];

  ngOnInit() {
    this.initList();
  }

  initList = () => {
    const arr = [];
    const data = {
      name: 'John Brown',
      gender: '男',
      idcard: '320509*********87',
      birthdate: '19670809',
      company: '人力资源社会保障局',
      account: 'lizhinan'
    }
    for (let i = 1; i < 50; i++) {
      const item = {
        key: i,
        ...data
      }
      arr.push(item);
    }
    this.listOfData = arr;
  }
}
