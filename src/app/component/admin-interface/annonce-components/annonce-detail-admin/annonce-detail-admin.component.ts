import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AnnonceService} from '../../../../services/annonce.service';
import {Annonce} from '../../../../models/Annonce';

@Component({
  selector: 'app-annonce-detail-admin',
  templateUrl: './annonce-detail-admin.component.html',
  styleUrls: ['./annonce-detail-admin.component.css']
})
export class AnnonceDetailAdminComponent implements OnInit {

  annonce: Annonce;
  essence: string;
  constructor(private annonceService: AnnonceService, private aR: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.aR.snapshot.paramMap.get('id');

    this.annonceService.getOne(Number(id)).subscribe(r => this.annonce = r);


  }

  delete(): void {
    this.annonceService.delete(this.annonce.id).subscribe(r => this.router.navigate(['/user_admin']));
  }

}
