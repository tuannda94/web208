import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChampComponent } from './champ/champ.component';
import { TableComponent } from './table/table.component';
import { NameComponent } from './name/name.component';
import { IdentityComponent } from './identity/identity.component';
import { TableAvatarComponent } from './table/table-avatar/table-avatar.component';
import { FormComponent } from './form/form.component';
// Import thư viện này để sử dụng Form
import { FormsModule } from '@angular/forms';
import { ShowValidateComponent } from './components/show-validate/show-validate.component';
import { UserComponent } from './user/user.component';
import { ListComponent } from './user/list/list.component';
import { UserFormComponent } from './user/form/form.component';
import { ProductClientComponent } from './product-client/product-client.component';
import { AboutClientComponent } from './about-client/about-client.component';
import { ProductDetailClientComponent } from './product-detail-client/product-detail-client.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { HomeClientComponent } from './home-client/home-client.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';

// Đây là module cung cấp các phương thức để component sử dụng gọi API
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ChampComponent,
    TableComponent,
    NameComponent,
    IdentityComponent,
    TableAvatarComponent,
    FormComponent,
    ShowValidateComponent,
    UserComponent,
    ListComponent,
    UserFormComponent,
    ProductClientComponent,
    AboutClientComponent,
    ProductDetailClientComponent,
    ClientLayoutComponent,
    AdminLayoutComponent,
    HomeClientComponent,
    AdminProductListComponent,
    AdminProductDetailComponent,
    AdminProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule, // Đưa vào đây để FormComponent bên trên có thể dùng
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
