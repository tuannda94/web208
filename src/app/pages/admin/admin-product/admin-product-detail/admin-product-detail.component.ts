import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../../../../services/local-storage.service';
import { ProductService } from '../../../../services/product.service';
import { Product, ProductCart } from '../../../../types/Product';

@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.css']
})
export class AdminProductDetailComponent implements OnInit {
  // 1. Phải lấy ra được id trên url
  id: string;
  // 2. Sử dụng id đó để call API lấy chi tiết product
  product: Product;
  // Định nghĩa biến lắng nghe giá trị cho value giỏ hàng
  cartValue: number;

  constructor(
    private activateRoute: ActivatedRoute, // dùng để lấy dữ liệu tham số trên URL
    private productService: ProductService, // dùng để lấy các phương thức call API product
    private lsService: LocalStorageService // dùng để lấy các phương thức xử lý ls
  ) {
    // định nghĩa dữ liệu mặc định
    this.id = '';
    this.product = {
      id: 0,
      name: ''
    };

    this.cartValue = 1;
  }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];

    this.productService.getProduct(this.id).subscribe((data) => {
      this.product = data;
    });
  }

  onChangeCartValue(event: any) {
    this.cartValue = event.target.value;
  }

  onAddToCart() {
    // Định nghĩa 1 sp trong giỏ hàng có cấu trúc là gì
    const addItem = {
      ...this.product,
      value: +this.cartValue
    };
    // Nếu thực hiện như cũ, thì phía component cart sẽ không lắng nghe được

    // Thực hiện gọi lsService để component cart có thể lắng nghe thay đổi
    this.lsService.setItem(addItem);
    this.cartValue = 1;

  }

}
