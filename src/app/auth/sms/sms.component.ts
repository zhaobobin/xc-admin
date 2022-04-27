import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'auth-psd',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.less']
})
export class AuthSmsComponent implements OnInit {
  title = '短信登陆';

  validateForm!: FormGroup;

  submitForm(): void {
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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      mobile: [null, [Validators.required]],
      smscode: [null, [Validators.required]],
      remember: [true]
    });
  }

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }
}
