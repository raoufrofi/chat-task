import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  users = [];

  constructor(private fetchedUsers: UsersService, private route: Router) {
    this.fetchedUsers.getUsers().subscribe((data: any) => {
      this.users = data;
    });
  }

  onSelect(user: any) {
    this.route.navigate(['chat', user.id]);
  }
}
