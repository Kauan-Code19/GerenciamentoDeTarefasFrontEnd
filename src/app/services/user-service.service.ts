import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormUserResponse } from '../interfaces/form-user-response.interface.ts';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private endpointLoginURl = `${environment.apiUrl}login`;
  private endpointRegisterURl = `${environment.apiUrl}user`;

  constructor(private http: HttpClient) {}

  sendDataLogin(login: string, password: string) : Observable<FormUserResponse> {
    const data = {login, password};

    return this.http.post<FormUserResponse>(this.endpointLoginURl, data);
  }

  sendDataRegister(login: string, password: string) : Observable<FormUserResponse> {
    const data = {login, password};

    return this.http.post<FormUserResponse>(this.endpointRegisterURl, data);
  }
}
