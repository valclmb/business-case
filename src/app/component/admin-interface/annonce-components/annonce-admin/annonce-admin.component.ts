import {Component, Input, OnInit} from '@angular/core';
import {Annonce} from '../../../../models/Annonce';

@Component({
  selector: '[app-annonce-admin]',
  templateUrl: './annonce-admin.component.html',
  styleUrls: ['./annonce-admin.component.css']
})
export class AnnonceAdminComponent implements OnInit {

  @Input() annonce: Annonce;
  constructor() { }

  ngOnInit(): void {
  }

}
