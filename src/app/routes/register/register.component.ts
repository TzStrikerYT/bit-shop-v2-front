import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/api/users/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(public userService: UserService) {}

  createUser(form: NgForm) {
    // revisar los campos
    let data = form.value;

    this.userService.createUser(data).subscribe((data: any) => {
      console.log(data);
      alert(data.status > 399 ? data.error.msg : data.msg);
    });
  }
}
