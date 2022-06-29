import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_project';
  content = 'WEB207.01';

  student = {
    name: 'Nguyen Van A',
    id: 'PH12345',
    phone: '0123456789'
  };

  users = [
    {
      name: 'tuannda3',
      id: 1,
      status: 0
    },
    {
      name: 'tuannda4',
      id: 2,
      status: 1
    },
    {
      name: 'tuannda3',
      id: 3,
      status: 0
    },
  ];
}
