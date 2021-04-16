import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  myForm: FormGroup;
  adminRole: string;
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
        numeroSiret: ['', Validators.required],
        roles: [this.adminRole]
      });
  }

  addUser(): void {
    if (this.myForm.valid) {

      if (this.myForm.value.roles){
        this.myForm.value.roles = 'ROLES_ADMIN';
      } else {
        this.myForm.value.roles = 'ROLES_USER';
      }

      this.userService.addUser(this.myForm.value).subscribe();
      this.router.navigate(['/user']);
      console.log(this.myForm.value);

    }


  }


}
