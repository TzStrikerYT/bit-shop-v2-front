import { Component } from '@angular/core';
import { UserService } from 'src/app/api/users/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public user: UserService){

  }

  ngOnInit(){
    this.user.getAllUsers().subscribe((data) => {
      console.log(data)
    })
  }
}
