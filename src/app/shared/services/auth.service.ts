import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseURL = environment.baseApiURL + 'auth';
  constructor(private httpClient: HttpClient) {}

  register(newUser: any): Observable<any> {
    return this.httpClient
      .post(this.baseURL + '/register', newUser)
      .pipe(map((x: any) => x));
  }

  login(username: string, password: string): Observable<any> {
    return this.httpClient
      .post(this.baseURL + '/login', { username, password })
      .pipe(map((x: any) => x));
  }

  changePassword(changePassObj: any): Observable<any> {
    return this.httpClient
      .put(this.baseURL + '/changePassword', changePassObj)
      .pipe(map((x: any) => x.data));
  }

  confirmation(token: String): Observable<any> {
    return this.httpClient
      .put(this.baseURL + '/confirmation/' + token, {})
      .pipe(map((x: any) => x));
  }
}
