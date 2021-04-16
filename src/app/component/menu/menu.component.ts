import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadroomModule } from '@ctrl/ngx-headroom';
import {User} from '../../models/User';
import {AuthService} from '../../services/auth.service';
import {TokenStorageService} from '../../services/token-storage.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('searchAnimation', [
      state('show', style({
        opacity: 1,
      })),
      state('hide', style({
        opacity: 0,
        width: '900px',

      })),
      transition('show => hide', animate('300ms ease-out')),
      transition('hide => show', animate('300ms ease-in')),
    ])
  ]
})
export class MenuComponent implements OnInit {

  showSearch = false;
  connectedUser?: User;
  connected = '/profil';

  constructor(private token: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    this.connectedUser = this.token.getUser();
    if (window.sessionStorage.length === 0){
      this.connected = '/login';
    }
  }

  onSubmit(): void {}

  stateSearch(): string {
    return this.showSearch ? 'show' : 'hide';
  }
  toggleSearch(): void{
    this.showSearch = !this.showSearch;
  }

  signOut(): void {
    this.token.signOut();
    this.router.navigate(['/annonce']).then(() => {
      window.location.reload();
    });

  }
}
