import { Component, OnInit } from '@angular/core';
import {HeroesComponent} from '../../heroes/heroes.component';
import {Heroe} from '../../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  heroes:Heroe[]= [];

  constructor(private router:Router) {  }

  ngOnInit() {
  }

  buscarHeroe(texto:string){
    this.router.navigate(['/findedHeroes', texto]);

  }

}
