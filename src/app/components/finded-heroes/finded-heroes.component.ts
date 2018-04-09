import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe} from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-finded-heroes',
  templateUrl: './finded-heroes.component.html'
})
export class FindedHeroesComponent implements OnInit {

  heroesEncontrados:Heroe[]= [];
  busqueda:string;

  constructor(private _heroesService:HeroesService, private aRoute:ActivatedRoute, private router:Router) {
    this.aRoute.params.subscribe(params => {
      this.heroesEncontrados = this._heroesService.buscarHeroe(params['texto']);
      this.busqueda = params['texto'];
      });
   }

  ngOnInit() {
  }


  verHeroe(id:number){
    this.router.navigate(['/heroe', id]);
  }
}
