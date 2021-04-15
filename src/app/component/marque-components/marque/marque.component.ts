import {Component, Input, OnInit} from '@angular/core';
import {Marque} from '../../../models/Marque';
import {Modele} from '../../../models/Modele';

@Component({
  selector: '[app-marque]',
  templateUrl: './marque.component.html',
  styleUrls: ['./marque.component.css']
})
export class MarqueComponent implements OnInit {
  @Input() marque: Marque;

  constructor() { }

  ngOnInit(): void {
  }



}
