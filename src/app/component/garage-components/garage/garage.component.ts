import {Component, Input, OnInit} from '@angular/core';
import {Garage} from '../../../models/Garage';

@Component({
  selector: '[app-garage]',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.css']
})
export class GarageComponent implements OnInit {
  @Input() garage: Garage;

  constructor() { }

  ngOnInit(): void {
  }


}
