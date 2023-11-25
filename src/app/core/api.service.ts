import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://gym-dev.com/auto_escola/api';

  constructor(private http: HttpClient) {}

  getUsers(
    user: string,
    email: string,
    status: string,
    usergroup: string,
    cpf: string,
    nextToPage: number,
    per_page: string
  ): Promise<any> {
    const formData = {
      name: user,
      email: email,
      usergroup: usergroup,
      cpf: cpf,
      status: status,
      page: nextToPage,
      per_page: per_page,
    };
    const endPoint = `${this.apiUrl}/user/users/`;
    return this.http
      .post(endPoint, formData)
      .toPromise()
      .then((response) => {
        // Resetar temporizador de inatividade após obter usuários

        return response as any[];
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }

  createUser(userData: {
    username: string;
    password: string;
    cpf: string;
    active: number;
    name: string;
    phone: string;
    email: string;
    age: number;
    usergroup: string;
    created_by: string;
    dt_nasc: string;
    gender: string;
  }): Promise<any> {
    const createUserData = {
      username: userData.username,
      password: userData.password,
      cpf: userData.cpf,
      active: userData.active,
      name: userData.name,
      phone: userData.phone,
      email: userData.email,
      age: userData.age,
      usergroup: userData.usergroup,
      created_by: userData.created_by,
      dt_nasc: userData.dt_nasc,
      gender: userData.gender,
    };
    const createUserEndpoint = `${this.apiUrl}/user/create/`;
    return this.http
      .post(createUserEndpoint, createUserData)
      .toPromise()
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
}
