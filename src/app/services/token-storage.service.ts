import { Injectable } from '@angular/core';
import {User} from '../models/User';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {



  constructor() { }

  saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  saveUser(user: User): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  getUser(): any{
    const user = window.sessionStorage.getItem(USER_KEY);

    if(user) {
      return JSON.parse(user);
    }
    return {};
  }

  signOut(): void {
    window.sessionStorage.clear();
  }

}
