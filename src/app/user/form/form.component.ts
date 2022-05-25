import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class UserFormComponent implements OnInit {
  @Input() inputValues: any;
  //1. Định nghĩa phương thức bắn dữ liệu ngược cho cha
  @Output() handleSubmit: EventEmitter<any>;
  constructor() {
    //2. Khởi tạo
    this.handleSubmit = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onSubmit(userForm: NgForm) {
    console.log(userForm.value);
    // 3. Bắn dữ liệu, tương tự Input nhưng theo chiều ngược lại
    this.handleSubmit.emit(userForm.value);

    userForm.resetForm({
      name: '',
      age: 0
    });
  }

}
