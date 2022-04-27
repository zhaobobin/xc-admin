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
  selector: 'user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['../pages.component.less', './user-manage.component.less']
})
export class UserManageComponent implements OnInit {
  title = '用户管理';
  
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

  search = () => {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  newData = () => {

  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(key)) {
        this.validateForm.controls[key].markAsPristine();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    }
  }

  importData = () => {

  }

}
