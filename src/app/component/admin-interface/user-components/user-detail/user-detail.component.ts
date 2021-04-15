import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../../models/User';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;
  constructor(private userService: UserService,private aR: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.aR.snapshot.paramMap.get('id');

    this.userService.getOne(Number(id)).subscribe(r => this.user = r);
  }

  delete(): void{
    this.userService.delete(this.user.id).subscribe(r => this.router.navigate(['/user']));
  }

}
