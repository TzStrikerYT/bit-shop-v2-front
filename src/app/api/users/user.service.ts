import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlApi = `${environment.API_URI}/user`

  constructor(private http: HttpClient) {
  }

  //metodos que van a consumir el api
  getAllUsers(){
    return this.http.get(`${this.urlApi}/getAll`)
  }


}
