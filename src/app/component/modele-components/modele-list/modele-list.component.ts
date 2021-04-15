import { Component, OnInit } from '@angular/core';
import {Modele} from '../../../models/Modele';
import {ModeleService} from '../../../services/modele.service';

@Component({
  selector: 'app-modele-list',
  templateUrl: './modele-list.component.html',
  styleUrls: ['./modele-list.component.css']
})
export class ModeleListComponent implements OnInit {

  modeles: Modele[];
  constructor(private modeleService: ModeleService) { }

  ngOnInit(): void {
    this.getModeles();
  }

  getModeles(): void {
    this.modeleService.getModeles().subscribe(r => this.modeles = r['hydra:member'] );
  }

}
