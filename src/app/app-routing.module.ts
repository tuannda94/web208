import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'user',
        component: UserComponent
      }
    ]
  },
  {
    path: 'admin',
    // component: AdminLayoutComponent
  }
  // {
  //   path: 'user',
  //   component: UserComponent
  // },
  // {
  //   path: 'user/create',
  //   component: UserFormComponent
  // },
  // {
  //   path: 'user',
  //   component: UserComponent,
  //   // 1. Nếu có children thì không dùng component để render nữa
  //   // 2. Nếu vẫn muốn sử component (khung layout) thì trong component sẽ phải có router-outlet
  //   children: [
  //     // {
  //     //   path: '',
  //     //   component: UserComponent
  //     // },
  //     {
  //       path: 'create',
  //       component: UserFormComponent
  //     },
  //     {
  //       path: 'edit',
  //       component: UserFormComponent
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
