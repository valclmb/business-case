import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../../services/user.service';
import {User} from '../../../../models/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.userService.getUser().subscribe(r => this.users = r['hydra:member']);
  }

}
