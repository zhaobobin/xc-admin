import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-login',
  styleUrls: ['login.component.less'],
  templateUrl: './login.component.html',
})
export class AuthLoginComponent implements OnInit {

  title = '欢迎登陆';

  validateForm!: FormGroup;

  constructor(public router: Router, private fb: FormBuilder) {}

  copyRightText = 'Copyright©2021-2022 建设单位：相城区信息中心';

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      this.router.navigate(['/pages']);
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }
}
