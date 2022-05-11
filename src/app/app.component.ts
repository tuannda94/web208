import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_we16304 FPT Poly';

  // Phần logic, định nghĩa giá trị biến và sử dụng ở html
  name = 'tuannda3';
  class = 'WE16304';

  // kiểu dữ liệu mảng
  students = [
    {
      id: 'PH11111',
      name: 'tuannda1',
      status: 0,
    },
    {
      id: 'PH22222',
      name: 'tuannda2',
      status: 1
    },
    {
      id: 'PH33333',
      name: 'tuannda3',
      status: 1
    },
  ];

  teachers = [
    {
      id: 1,
      name: 'tuannda3',
      age: 27,
      gender: 1,
      avatar: 'https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg',
      status: 1
    },
    {
      id: 2,
      name: 'tuannda3',
      age: 27,
      gender: 0,
      avatar: 'https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg',
      status: 0
    },
  ];

  studentName = 'TUANNDA222';
  studentId = 'PH12345678';
}
