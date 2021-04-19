import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {TokenStorageService} from '../services/token-storage.service';

@Injectable()

export class AuthAdminGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router, private token: TokenStorageService) {}

  canActivate(): boolean {
    const user = window.sessionStorage.getItem('auth-user');
    const checkAdmin = JSON.parse(user);

    if (!this.auth.isAuthenticated()){
      this.router.navigate(['/login']);
      return false;
    } else if (checkAdmin.roles == 'ROLES_ADMIN'){
      return true;
    } else {
      this.router.navigate(['annonce']);
     return false;
    }

}
}
