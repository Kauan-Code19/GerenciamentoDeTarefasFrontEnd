import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormUserResponse } from '../interfaces/form-user-response.interface.ts';
import { GetUserResponse } from '../interfaces/get-user-response';
import { GetUserImage } from '../interfaces/get-user-image';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private endpointLoginURl = `${environment.apiUrl}login`;
  private endpointRegisterURl = `${environment.apiUrl}user`;
  private endpointGetUserURL = `${environment.apiUrl}user/`;  //concatena com o id do uset na função
  private endpointGetImageURl = `${environment.apiUrl}user/images/`;


  constructor(private http: HttpClient) {}

  sendDataLogin(login: string, password: string) : Observable<FormUserResponse> {
    const data = {login, password};

    return this.http.post<FormUserResponse>(this.endpointLoginURl, data);
  }

  sendDataRegister
  (
    name: string, login: string, password: string, imgName: string, base64Image: string
  ) : Observable<FormUserResponse> {
    const data = {name, login, password, imgName, base64Image}

    return this.http.post<FormUserResponse>(this.endpointRegisterURl, data);
  }

  sendDataUpdate(id: number, name: string, login: string, password: string) : Observable<FormUserResponse> {
    const data = {name, login, password};
    const url = `${this.endpointGetUserURL}${id}`;

    return this.http.put<FormUserResponse>(url, data);
  }

  getDataUser(id: number) : Observable<GetUserResponse> {
    const url = `${this.endpointGetUserURL}${id}`;
    
    return this.http.get<GetUserResponse>(url);
  }

  getImageUserUrl(imgName: string) : Observable<GetUserImage> {
    const url = `${this.endpointGetImageURl}${imgName}`;

    return this.http.get<GetUserImage>(url);
  }

  deleteUser(id: number) : Observable<void> {
    const url = `${this.endpointGetUserURL}${id}`;

    return this.http.delete<void>(url);
  }
}
