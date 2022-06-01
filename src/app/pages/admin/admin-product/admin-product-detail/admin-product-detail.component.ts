import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../../services/product.service';
import { Product } from '../../../../types/Product';

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

  constructor(
    private activateRoute: ActivatedRoute, // dùng để lấy dữ liệu tham số trên URL
    private productService: ProductService // dùng để lấy các phương thức call API product
  ) {
    // định nghĩa dữ liệu mặc định
    this.id = '';
    this.product = {
      id: 0,
      name: ''
    };
  }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];

    this.productService.getProduct(this.id).subscribe((data) => {
      this.product = data;
    });
  }

}
