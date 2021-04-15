import { Component, OnInit } from '@angular/core';
import {Modele} from '../../../models/Modele';
import {ActivatedRoute, Router} from '@angular/router';
import {ModeleService} from '../../../services/modele.service';

@Component({
  selector: 'app-modele-detail',
  templateUrl: './modele-detail.component.html',
  styleUrls: ['./modele-detail.component.css']
})
export class ModeleDetailComponent implements OnInit {

  modele: Modele;
  constructor(private aR: ActivatedRoute, private modeleService: ModeleService, private router: Router) { }

  ngOnInit(): void {
    const id = this.aR.snapshot.paramMap.get('id');

    this.modeleService.getOne(Number(id)).subscribe(r => this.modele = r);
  }
  delete(): void {
    this.modeleService.delete(this.modele.id).subscribe( r => this.router.navigate(['/modele']));
  }

}
