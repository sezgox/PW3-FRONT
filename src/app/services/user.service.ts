import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private myAppUrl: string;
  private myApiUrl: string = '';

  constructor(private http: HttpClient) {
    this.myAppUrl = enviroment.endpoint;
   }

   login(user: User): Observable<any> {
    this.myApiUrl = 'api/user/login'
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, user);
   }

   register(user: User): Observable<any> {
    this.myApiUrl = 'api/user'
    console.log(user)
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, user);
   }

}
