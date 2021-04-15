import { Component, OnInit } from '@angular/core';
import {Garage} from '../../models/Garage';
import {GaragesService} from '../../services/garages.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }


}
