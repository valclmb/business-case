import {AfterViewInit, Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../services/token-storage.service';
import {User} from '../../models/User';
import {Garage} from '../../models/Garage';
import {GaragesService} from '../../services/garages.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  connectedUser: User;
  garages = [];

  constructor(private token: TokenStorageService, private garageS: GaragesService) {
  }


  ngOnInit(): void {
    this.connectedUser = this.token.getUser();

    for (const value of this.connectedUser.garages.values()){
      this.garages.push(value);
    }
    console.log(this.garages)
  }
  delete(garage): void {
    this.garageS.delete(garage).subscribe();
    this.connectedUser = this.token.getUser();
    console.log(this.connectedUser);
  }


}
