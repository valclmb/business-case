import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Annonce} from '../../../models/Annonce';
import AOS from 'aos';
import {Router} from '@angular/router';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
  constructor(private router: Router) { }



  @Input() annonce: Annonce;
  order: string;
  oddEven: number;

  @HostListener('click') callDetail(): void{
    this.router.navigate([`/annonce/${this.annonce.id}`]);
  }


  ngOnInit(): void {
    AOS.init({
      duration: 1000
    });

    this.oddEven = this.annonce.id;


  }


}
