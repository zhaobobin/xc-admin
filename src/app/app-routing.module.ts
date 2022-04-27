import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { NotFoundComponent } from './pages/other/not-found.component';

import { AuthComponent } from './auth/auth.component';
import { AuthPsdComponent } from './auth/psd/psd.component';
import { AuthSmsComponent } from './auth/sms/sms.component';
import { AuthScanComponent } from './auth/scan/scan.component';

import { PagesComponent } from './pages/pages.component';
import { UserManageComponent } from './pages/user-manage/user-manage.component';
import { CompanyManageComponent } from './pages/company-manage/company-manage.component';
import { DepartmentManageComponent } from './pages/department-manage/department-manage.component';
import { ApplicationManageComponent } from './pages/application-manage/application-manage.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'psd',
        component: AuthPsdComponent,
      },
      {
        path: 'sms',
        component: AuthSmsComponent,
      },
      {
        path: 'scan',
        component: AuthScanComponent,
      },
      {
        path: '',
        redirectTo: 'psd',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      {
        path: 'user',
        component: UserManageComponent,
      },
      {
        path: 'company',
        component: CompanyManageComponent,
      },
      {
        path: 'department',
        component: DepartmentManageComponent,
      },
      {
        path: 'application',
        component: ApplicationManageComponent,
      },
      {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
