import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MarqueService} from '../../../services/marque.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-marque-add',
  templateUrl: './marque-add.component.html',
  styleUrls: ['./marque-add.component.css']
})
export class MarqueAddComponent implements OnInit {

  public myForm: FormGroup;
  constructor(private fb: FormBuilder, private marqueService: MarqueService, private router: Router) { }

  ngOnInit(): void {
    this.myForm = this.fb.group(
      {
        nomMarque: ['', Validators.required]
      });
  }

  addMarque(): void {

    if (this.myForm.valid) {
      this.marqueService.addMarque(this.myForm.value).subscribe();
      this.router.navigate(['/marque']);
    }

  }

}
