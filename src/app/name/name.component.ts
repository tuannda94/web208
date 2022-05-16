import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  // Định nghĩa nhận dữ liệu từ thuộc tính tên là name
  @Input() name: any;
  constructor() { }

  ngOnInit(): void {
  }

}
