import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  messages: any = [];
  userData: any;
  userId: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private user: UsersService
  ) {}

  ngOnInit() {
    let id = this.activeRoute.snapshot.paramMap.get('id');
    this.userId = id;

    this.user.getUserWithId(id).subscribe((data) => {
      this.userData = data;
    });
  }

  submitMessage(form: any) {
    console.log(form.value);
    this.messages.push(form.value.message);
    form.reset();
  }
}
