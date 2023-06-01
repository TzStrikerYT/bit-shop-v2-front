import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlApi = `${environment.API_URI}/user`
  userToCreate: User = new User()
  allUsers: User[] = []

  constructor(private http: HttpClient) {
  }

  //metodos que van a consumir el api
  getAllUsers(){
    return this.http.get(`${this.urlApi}/getAll`)
  }

  createUser(data: User){
    return this.http.post(`${this.urlApi}/create`, data)
  }

  deleteUser(_id: string){
    return this.http.delete(`${this.urlApi}/delete/${_id}`)
  }


}
