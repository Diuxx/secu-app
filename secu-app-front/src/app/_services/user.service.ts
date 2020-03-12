import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AbstractService } from './abstract.service';
import { User } from '../_models/user';

@Injectable()
export class UserService extends AbstractService {

  private url = 'users';
  private login_url = 'login';

  constructor(http: HttpClient) {
    super(http);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`http://localhost:3000/${this.url}`, this.getOptions('GET'));
  }

  loginUser(user: User): Observable<User> {
    return this.http.post<User>(`http://localhost:3000/${this.login_url}`, user, this.getOptions('POST'));
  }
}
