import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  inputValues = {
    id: 0,
    name: '123123123',
    age: 0,
    email: ''
  };

  users = [
    {
      id: 1,
      name: 'tuannda3',
      age: 30,
      email: 'tuannda3@fe.edu.vn',
    },
    {
      id: 15,
      name: 'tuannda2',
      age: 30,
      email: 'tuannda2@fe.edu.vn',
    },
    {
      id: 10,
      name: 'tuannda4',
      age: 30,
      email: 'tuannda4@fe.edu.vn',
    },
  ];

  onSubmit(userForm: NgForm) { // Nhận toàn bộ form
    //1. Tìm ra id lớn nhất
    const userIds = this.users
      .map(user => user.id)
      .sort((a, b) => a - b); // [1, 10, 15]
    const newId = userIds[userIds.length - 1];
    // 2. Thêm vào mảng
    this.users.push({
      ...userForm.value, // Lấy ra object giá trị của form
      id: newId + 1
    });
    // 3. Cập nhật lại giá trị ban đầu
    // userForm.resetForm(); // Nếu không truyền gì thì tất cả về null
    userForm.resetForm({
      name: '',
      age: 0,
      email: ''
    });
  }
}
