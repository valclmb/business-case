import { Component, OnInit } from '@angular/core';
import {Marque} from '../../../models/Marque';
import {ActivatedRoute, Router} from '@angular/router';
import {MarqueService} from '../../../services/marque.service';

@Component({
  selector: 'app-marque-detail',
  templateUrl: './marque-detail.component.html',
  styleUrls: ['./marque-detail.component.css']
})
export class MarqueDetailComponent implements OnInit {

  marque: Marque;
  constructor(private aR: ActivatedRoute, private marqueService: MarqueService, private router: Router) { }

  ngOnInit(): void {
    const id = this.aR.snapshot.paramMap.get('id');

    this.marqueService.getOne(Number(id)).subscribe(r => this.marque = r);
  }
  delete(): void {
    this.marqueService.delete(this.marque.id).subscribe(r => this.router.navigate(['/marque']));
  }
}
