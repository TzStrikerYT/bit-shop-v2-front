import { Component } from '@angular/core';
import { UserService } from 'src/app/api/users/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(public userService: UserService, public router: Router) {}

  login(form: NgForm) {
    let data = form.value;

    if (!data.password || !data.username)
      return alert('debes llenar todos los campos');

    this.userService.login(data).subscribe((data: any) => {
      localStorage.setItem('token', data.token)
      this.router.navigate(['/home'])
    }, (err: any) => {
      alert("Error al iniciar sesion")
    });
  }
}
