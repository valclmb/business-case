import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GaragesService} from '../../../../services/garages.service';
import {Router} from '@angular/router';
import {UserService} from '../../../../services/user.service';

import {User} from '../../../../models/User';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-garage-add',
  templateUrl: './garage-add.component.html',
  styleUrls: ['./garage-add.component.css']
})
export class GarageAddComponent implements OnInit {

  myForm: FormGroup;
  users: User[] ;
  constructor(private fb: FormBuilder, private garageService: GaragesService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {

    this.myForm = this.fb.group(
      {
        nomGarage: ['Garage du 8eme', Validators.required],
        numTel: ['0487547898', Validators.required],
        adresseLigne1: ['24 rue de Montribloud', Validators.required],
        adresseLigne2: [''],
        codePostal: ['69008', Validators.required],
        ville: ['Lyon', Validators.required],
        user: this.fb.group({id:  [''], })
      });
    this.userService.getUser().subscribe(m => this.users = m['hydra:member']);

  }

  addGarage(): void {
    if (this.myForm.valid) {
      this.garageService.addGarage(this.myForm.value).subscribe();
      this.router.navigate(['/garage']);

    }

}

}
