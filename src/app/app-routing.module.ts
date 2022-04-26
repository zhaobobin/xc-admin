import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { NotFoundComponent } from './pages/other/not-found.component';

import { AuthComponent } from './auth/auth.component';
import { UserLoginComponent } from './auth/login/login.component';
import { UserRegisterComponent } from './auth/register/register.component';

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
        path: 'login',
        component: UserLoginComponent,
      },
      {
        path: 'register',
        component: UserRegisterComponent,
      },
      {
        path: '',
        redirectTo: 'login',
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
        path: 'user-manage',
        component: UserManageComponent,
      },
      {
        path: 'company-manage',
        component: CompanyManageComponent,
      },
      {
        path: 'department-manage',
        component: DepartmentManageComponent,
      },
      {
        path: 'application-manage',
        component: ApplicationManageComponent,
      },
      {
        path: '',
        redirectTo: 'user-manage',
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
