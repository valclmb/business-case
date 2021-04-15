import { Component, OnInit } from '@angular/core';
import {MarqueService} from '../../../services/marque.service';
import {Marque} from '../../../models/Marque';

@Component({
  selector: 'app-marque-list',
  templateUrl: './marque-list.component.html',
  styleUrls: ['./marque-list.component.css']
})
export class MarqueListComponent implements OnInit {

  marque: Marque[] = [];

  constructor(private marqueService: MarqueService) { }

  ngOnInit(): void {
    this.getMarques();
  }

  getMarques(): void {
    this.marqueService.getMarques().subscribe(r => this.marque = r['hydra:member'] );
  }



}
