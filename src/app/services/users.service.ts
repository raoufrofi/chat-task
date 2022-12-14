import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient, private activeRoute: ActivatedRoute) {}

  getUsers() {
    return this.http.get('http://localhost:3000/users');
  }

  getUserWithId(id: string | null) {
    return this.http.get(`http://localhost:3000/users?id=${id}`);
  }
}
