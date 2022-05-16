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
      id: 'PH1111',
      status: 0
    },
    {
      name: 'tuannda2',
      id: 'PH2222',
      status: 1
    },
    {
      name: 'tuannda3',
      id: 'PH3333',
      status: 1
    }
  ];

  champs = [
    {
      name: 'Lucian',
      dame: 400,
      defend: 200,
      speed: 100,
      price: 6300,
      avatar: 'https://oneesports.blob.core.windows.net/cdn-data/sites/4/2021/08/pulsefire-lucian-lien-minh-huyen-thoai1.jpg'
    }
  ];
  // Định nghĩa biến để truyền sang file html
  studentName = 'tuannda3';
  studentId = 'PH123456';

  // Sự kiện
  // Biến lưu trạng thái hiển thị bảng
  showStatus = true;
  onClickBtn() {
    console.log("Btn clicked!");
    this.showStatus = !this.showStatus;
  }

  // Sự kiện hiển thị giá trị của các ô input
  inputValue = {
    name: '',
    avatar: '',
    dame: '',
    defend: '',
    speed: '',
    price: '',
  };
  onInput(event: any, key: 'name' | 'avatar' | 'speed' | 'dame' | 'defend' | 'price') {
    this.inputValue[key] = event.target.value;
  }
  // inputName = '';
  // onInputName(event: any) {
  //   this.inputValue['name'] = event.target.value;
  // }
  // inputAvatar = '';
  // onInputAvatar(event: any) {
  //   this.inputValue.avatar = event.target.value;
  // }
  onSubmit() {
    console.log('Giá trị obj các ô input', this.inputValue);
    // push obj this.input vào mảng champs để thêm 1 dòng dữ liệu mới
    // inputValue sẽ có cấu trúc như obj trong mảng champs
    // cần format lại obj theo đúng cấu trúc dữ liệu trong champs
    this.champs.push({
      ...this.inputValue,
      dame: +this.inputValue.dame,
      defend: +this.inputValue.defend,
      speed: +this.inputValue.speed,
      price: +this.inputValue.price,
    });
    // Gán lại giá trị default cho this.inputValue
    this.inputValue = {
      name: '',
      avatar: '',
      dame: '',
      defend: '',
      speed: '',
      price: '',
    };
  }
}
