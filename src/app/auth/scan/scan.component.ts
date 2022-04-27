import { Component } from '@angular/core';

@Component({
  selector: 'auth-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.less']
})
export class AuthScanComponent {
  title = '扫码登陆';
  scanMa = 'assets/images/ma.jpg'; // 二维码图片
  tabIndex = 1; // tab索引
  clickTab = (index: number) => {
    this.tabIndex = index;
    this.getScanMa();
  }
  getScanMa = () => {

  }
}
