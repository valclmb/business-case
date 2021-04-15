import { Component, OnInit } from '@angular/core';
import {Garage} from '../../../../models/Garage';
import {GaragesService} from '../../../../services/garages.service';

@Component({
  selector: 'app-garage-list',
  templateUrl: './garage-list.component.html',
  styleUrls: ['./garage-list.component.css']
})
export class GarageListComponent implements OnInit {

  garages: Garage[] = [];

  page = 1;
  pageSize = 4;
  collectionSize = this.garages.length;

  constructor(private gs: GaragesService) { }

  ngOnInit(): void {
    this.getGarages();
  }

  getGarages(): void{
    this.gs.getGarages().subscribe(r => this.garages = r['hydra:member']);
  }


}
