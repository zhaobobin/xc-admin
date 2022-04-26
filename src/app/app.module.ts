import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

// antd
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

import { NotFoundComponent } from './pages/other/not-found.component';

import { AuthComponent } from './auth/auth.component';
import { UserLoginComponent } from './auth/login/login.component';
import { UserRegisterComponent } from './auth/register/register.component';

import { PagesComponent } from './pages/pages.component';
import { UserManageComponent } from './pages/user-manage/user-manage.component';
import { CompanyManageComponent } from './pages/company-manage/company-manage.component';
import { DepartmentManageComponent } from './pages/department-manage/department-manage.component';
import { ApplicationManageComponent } from './pages/application-manage/application-manage.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    AuthComponent,
    UserLoginComponent,
    UserRegisterComponent,
    PagesComponent,
    UserManageComponent,
    CompanyManageComponent,
    DepartmentManageComponent,
    ApplicationManageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    NzButtonModule,
    NzTableModule,
    NzFormModule,
    NzInputModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
