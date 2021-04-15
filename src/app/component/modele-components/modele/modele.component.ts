import {Component, Input, OnInit} from '@angular/core';
import {Modele} from '../../../models/Modele';

@Component({
  selector: '[app-modele]',
  templateUrl: './modele.component.html',
  styleUrls: ['./modele.component.css']
})
export class ModeleComponent implements OnInit {

  @Input() modele: Modele;
  constructor() { }

  ngOnInit(): void {
  }

}
