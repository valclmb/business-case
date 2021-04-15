import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  myForm: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router ) { }

  ngOnInit(): void {

    this.myForm = this.fb.group(
      {
        nom: ['', Validators.required],
        prenom: ['', Validators.required],
        email: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', Validators.required],
        numTel: ['', Validators.required],
        numeroSiret: ['', Validators.required]
      });
  }

  addUser(): void {
    if (this.myForm.valid) {
      this.userService.addUser(this.myForm.value).subscribe();
      this.router.navigate(['/user']);
    }

  }


}
