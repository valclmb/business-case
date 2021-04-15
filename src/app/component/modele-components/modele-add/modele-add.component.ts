import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModeleService} from '../../../services/modele.service';
import {Router} from '@angular/router';
import {MarqueService} from '../../../services/marque.service';
import {Marque} from '../../../models/Marque';
import {Modele} from '../../../models/Modele';

@Component({
  selector: 'app-modele-add',
  templateUrl: './modele-add.component.html',
  styleUrls: ['./modele-add.component.css']
})
export class ModeleAddComponent implements OnInit {

  myForm: FormGroup;
  marques: Marque[];
  constructor(private fb: FormBuilder, private modeleS: ModeleService, private marqueS: MarqueService, private router: Router) { }

  ngOnInit(): void {

    this.myForm = this.fb.group(
      {
        nomModele: ['', Validators.required],
        marque: this.fb.group(
          {id : 1 }
        )
      });
    this.getMarques();
  }

  getMarques(): void {
    this.marqueS.getMarques().subscribe(r => this.marques = r['hydra:member']);
  }

  addModele(): void{
    console.log(this.myForm.value);
    if (this.myForm.valid) {
      this.modeleS.addModele(this.myForm.value).subscribe();
      this.router.navigate(['/modele']);
    }
  }
}
