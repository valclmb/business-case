import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {TokenStorageService} from '../../services/token-storage.service';
import {User} from '../../models/User';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  formUser: FormGroup;
  errorMessage = '';
  user: User;
  showPassword = false;
  textPassword = 'Afficher';


  constructor(private fb: FormBuilder, private authS: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    this.formUser = this.fb.group({
        username: ['', Validators.required] ,
        password: ['', Validators.required]
      }

    );
  }

  onSubmit(): void {

    this.authS.login(this.formUser.value).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token);

        this.authS.saveUser(data.token).subscribe(then =>
        {
          this.tokenStorage.saveUser(then);
        });
        this.router.navigate(['/annonce']);
      }
    );
  }


  passwordToggle(): void {
    this.showPassword = !this.showPassword;
    if (this.showPassword){
      this.textPassword = 'Masquer';
    } else {
      this.textPassword = 'Afficher';
    }

  }
}

