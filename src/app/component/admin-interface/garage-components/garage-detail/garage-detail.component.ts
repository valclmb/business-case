import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GaragesService} from '../../../../services/garages.service';
import {Garage} from '../../../../models/Garage';

@Component({
  selector: 'app-garage-detail',
  templateUrl: './garage-detail.component.html',
  styleUrls: ['./garage-detail.component.css']
})
export class GarageDetailComponent implements OnInit {

  garage: Garage;
  constructor(private gs: GaragesService, private aR: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.aR.snapshot.paramMap.get('id');

    this.gs.getOne(Number(id)).subscribe(r => this.garage = r);
  }

  delete(): void {
    this.gs.delete(this.garage.id).subscribe(r => this.router.navigate(['/garage']));
  }


}
