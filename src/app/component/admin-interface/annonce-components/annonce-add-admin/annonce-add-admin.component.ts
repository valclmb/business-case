import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModeleService} from '../../../../services/modele.service';
import {Modele} from '../../../../models/Modele';
import {Garage} from '../../../../models/Garage';
import {GaragesService} from '../../../../services/garages.service';
import {AnnonceService} from '../../../../services/annonce.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-annonce-add-admin',
  templateUrl: './annonce-add-admin.component.html',
  styleUrls: ['./annonce-add-admin.component.css']
})
export class AnnonceAddAdminComponent implements OnInit {

  couleurs =  [
    'noir',
    'blanc',
    'gris clair',
    'gris foncé',
    'bleu clair',
    'bleu marine',
    'rouge',
    'marron',
    'vert',
    'rose',
    'orange',
    'violet',
    'jaune'];

  myForm: FormGroup;
  modeles: Modele[];
  garages: Garage[];
  constructor(private fb: FormBuilder,
              private annonceService: AnnonceService,
              private garageService: GaragesService,
              private modeleService: ModeleService,
              private router: Router) { }

  ngOnInit(): void {

    this.garageService.getGarages().subscribe(r => this.garages = r['hydra:member']);
    this.modeleService.getModeles().subscribe(r => this.modeles = r['hydra:member']);
    this.myForm = this.fb.group(
      {
        titre: ['Fiat 500X à vendre', Validators.required],
        typeCarburant: [true, Validators.required],
        reference: ['FRDES5656', Validators.required],
        description: ['', Validators.required],
        kilometrage: [123456789, Validators.required],
        couleur: ['', Validators.required],
        etatVehicule: ['Bien', Validators.required],
        prix: ['250145', Validators.required],
        garage: this.fb.group({id: [3, Validators.required]}),
        modele: this.fb.group({id : ['1', Validators.required]}),
        // photos: this.fb.group({chemin: []}),
      });
  }

  addAnnonce(): void {

    console.log(this.myForm.controls);
    if (this.myForm.valid){
      this.myForm.value.typeCarburant ? this.myForm.value.typeCarburant = true : this.myForm.value.typeCarburant = false;
      this.annonceService.addAnnonce(this.myForm.value).subscribe();
      this.router.navigate(['/annonce_admin']);
    }
  }

}
