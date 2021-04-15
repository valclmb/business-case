import { Component, OnInit } from '@angular/core';
import {AnnonceService} from '../../../../services/annonce.service';
import {Annonce} from '../../../../models/Annonce';

@Component({
  selector: 'app-annonce-list-admin',
  templateUrl: './annonce-list-admin.component.html',
  styleUrls: ['./annonce-list-admin.component.css']
})
export class AnnonceListAdminComponent implements OnInit {

  annonces?: Annonce[];
  constructor(private annonceService: AnnonceService) { }

  ngOnInit(): void {
    this.getAnnonce();
  }

  getAnnonce(): void {
    this.annonceService.getAnnonces().subscribe(r => this.annonces = r['hydra:member']);
  }

}
