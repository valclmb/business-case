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
    ]),

   trigger('loginAnimation', [
     state('show', style({
       opacity: 1
     })),
     state('hide', style({
       opacity: 0,
       width: '0px'
     })),
     transition('show => hide', animate('150ms ease-out')),
     transition('hide => show', animate('150ms ease-in')),
   ]),
  ]
})
export class MenuComponent implements OnInit {

  showLogin = false;
  showSearch = false;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {}

  stateSearch(): string {
    return this.showSearch ? 'show' : 'hide';
  }
  stateLogin(): string {
    return this.showLogin ? 'show' : 'hide';
  }
  toggleSearch(): void{
    this.showSearch = !this.showSearch;
  }

}
