import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent{
  heroe:Heroe;
  buscando:boolean;

  constructor(private router:Router, private aRoute:ActivatedRoute, private _heroesService:HeroesService) {

      this.aRoute.params.subscribe(params => {
      this.buscando = _heroesService.getBuscando();
      this.heroe = _heroesService.getHeroe(params['id']);
      //console.log(this.heroe)
    })
  }

  regresar(){
    if (this._heroesService.getBuscando()){
      this.router.navigate(['/findedHeroes', this._heroesService.busqueda]);
    }else{
      this.router.navigate(['/heroes']);
    }


  }

}
