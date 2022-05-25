import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users = [
    {
      id: 1,
      name: 'tuannda3',
      age: 30
    },
    {
      id: 10,
      name: 'tuannda3',
      age: 30
    }
  ];

  formValues = {
    id: 0,
    name: '',
    age: 0
  };

  onSubmitUser(newUser: any) {
    if (newUser.id === 0) { // thêm mới
      const userIds = this.users.map(user => user.id).sort((a, b) => (b - a));
      const newId = userIds[0];

      return this.users.push({
        id: newId + 1,
        ...newUser
      });
    }

    // Chỉnh sửa
    return this.users.forEach((user, index) => {
      if (user.id === newUser.id) {
        this.users[index] = newUser;
      }
    });

    // for (let i = 0; i < this.users.length; i++) {
    //   if(this.users[i].id === newUser.id) {
    //     this.users[i] = newUser;
    //   }
    // }
  }

  onEditUser(userId: number) {
    const editUser = this.users.find(user => user.id === userId);

    if (editUser) {
      this.formValues = { ...editUser };
    }
  }

  onDeleteUser(userId: number) {
    if (userId) {
      this.users = this.users.filter(user => user.id !== userId);
    }
  }
}
