import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() users: any;

  // 1. Định nghĩa sự kiện trả ngược dữ liệu khi edit
  @Output() handleEdit: EventEmitter<number>;
  @Output() handleDelete: EventEmitter<number>;
  constructor() {
    // 2. Gán giá trị default
    this.handleEdit = new EventEmitter();
    this.handleDelete = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onEdit(userId: number) {
    // 3. Bắn dữ liệu về cho component cha
    this.handleEdit.emit(userId);
  }

  onDelete(userId: number) {
    this.handleDelete.emit(userId);
  }
}
