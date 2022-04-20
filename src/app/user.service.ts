import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { User } from './user';


@Injectable()
export class UserService {

  private usersUrl: string;
  private saveUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:9090/api/getUsers';
    this.saveUrl = 'http://localhost:9090/api/users';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user: User) {
    return this.http.post<User>(this.saveUrl, user);
  }
}