import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  selector: 'setting-manage',
  templateUrl: './setting-manage.component.html',
  styleUrls: ['../pages.component.less', './setting-manage.component.less']
})
export class SettingManageComponent implements OnInit {
  title = '系统设置';
  
  listOfData: Person[] = [];

  validateForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initList();

    this.validateForm = this.fb.group({
      idcard: [null],
      name: [null],
      mobile: [null]
    });
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
    for (let i = 1; i <= 50; i++) {
      const item = {
        key: i,
        ...data
      }
      arr.push(item);
    }
    this.listOfData = arr;
  }

}
