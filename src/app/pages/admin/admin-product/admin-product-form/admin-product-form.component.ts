import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  productForm: FormGroup;
  productId: string;

  constructor(
    private productService: ProductService, // cung cấp createProduct
    private router: Router, // cung cấp navigate điều hướng
    private activateRoute: ActivatedRoute // lấy ra các tham số trong url
  ) {
    this.productForm = new FormGroup({
      // name: new FormControl('', Validators.required),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32),
        this.onValidateNameHasProduct // tên custom validate
      ]),
      // price: new FormControl(0),
    });

    this.productId = '0';
  }

  ngOnInit(): void {
    this.productId = this.activateRoute.snapshot.params['id'];
    if (this.productId) {
      this.productService.getProduct(this.productId).subscribe(data => {
        // Gán giá trị cho form, patchValue sẽ nhận đầy đủ thuộc tính của form
        this.productForm.patchValue({
          name: data.name
        });
      });
    }
  }

  // Mỗi khi FormControl name được thay đổi thì sẽ gọi vào đây
  onValidateNameHasProduct(control: AbstractControl): ValidationErrors | null {
    // 1. Lấy ra value của FormControl name hiện tại
    const {value} = control; // value = control.value;
    // 2. Kiểm tra theo điều kiện chứa từ khoá 'product'
    if (!value.includes('product')) {
      return {hasProductError: true};
    }
    // 3. trả về kq nếu không lỗi
    return null;
  }

  onSubmit() {
    // 1. Lấy dữ liệu từ form
    const submitData = this.productForm.value;

    if (this.productId !== '0' || this.productId !== undefined) {
      return this.productService.updateProduct(this.productId, submitData).subscribe(data => {
        this.router.navigateByUrl('/admin/products');
      });
    }

    // 2. Call API (Cần định nghĩa service và router điều hướng)
    return this.productService.createProduct(submitData).subscribe((data) => {
      // 3. Sau khi API call thành công sẽ điều hướng về danh sách
      // this.router.navigate(['/admin', 'products']);
      this.router.navigateByUrl('/admin/products');
    })

  }

}
