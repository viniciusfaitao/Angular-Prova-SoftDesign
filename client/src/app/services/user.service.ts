import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get<User[]>('/users');
  }

  getAll() {
    return this.http.get<User[]>('/users');
  }

  getById(id: number) {
    return this.http.get('/users/' + id);
  }

  register(user: User) {
    return this.http.post('/users/register', user);
  }

  update(user: User) {
    return this.http.put('/users/' + user.id, user);
  }

  delete(id: number) {
    return this.http.delete('/users/' + id);
  }
}
