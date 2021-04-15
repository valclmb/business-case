import { Component, OnInit } from '@angular/core';
import {AnnonceService} from '../../../services/annonce.service';
import {Annonce} from '../../../models/Annonce';
import AOS from 'aos';


@Component({
  selector: 'app-annonce-list',
  templateUrl: './annonce-list.component.html',
  styleUrls: ['./annonce-list.component.css']
})
export class AnnonceListComponent implements OnInit {

  annonces: Annonce[] = [];

  constructor(private as: AnnonceService) { }

  ngOnInit(): void {
    this.getAnnonces();
    AOS.init();

  }

  getAnnonces(): void {
  this.as.getAnnonces().subscribe(r => this.annonces = r['hydra:member'] );
  }

}
