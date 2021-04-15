import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AnnonceService} from '../../../services/annonce.service';
import {Annonce} from '../../../models/Annonce';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-annonce-detail',
  templateUrl: './annonce-detail.component.html',
  styleUrls: ['./annonce-detail.component.css']
})
export class AnnonceDetailComponent implements OnInit {

  annonce!: Annonce;
  essence!: string;
  constructor(private activeR: ActivatedRoute, private as: AnnonceService, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.activeR.snapshot.paramMap.get('id'));
    this.as.getOne(id).subscribe(r => this.annonce = r);
  }

}
