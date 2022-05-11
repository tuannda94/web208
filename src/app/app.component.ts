import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// Đây là nơi định nghĩa component và logic
export class AppComponent {
  // Định nghĩa các biến,
  // Các biến này có thể nhận được giá trị ở file html
  title = 'angular we16301 FPT Poly';

  // Khai báo thêm 1 số biến để html sử dụng
  name = 'tuannda3';
  class = 'we16301';

  students = [
    {
      name: 'tuannda1',
      id: 'PH1111'
    },
    {
      name: 'tuannda2',
      id: 'PH2222'
    }
  ];
}
