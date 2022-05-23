import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './table/table.component';
import { TableNameComponent } from './table/table-name/table-name.component';
import { NameComponent } from './name/name.component';
import { IdentityComponent } from './identity/identity.component';
import { TableAvatarComponent } from './table/table-avatar/table-avatar.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { ShowValidateComponent } from './components/show-validate/show-validate.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableNameComponent,
    NameComponent,
    IdentityComponent,
    TableAvatarComponent,
    FormComponent,
    ShowValidateComponent,
    UserComponent,
    UserListComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule // FormsModule được sử dụng ở các component đã có bên trên
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
