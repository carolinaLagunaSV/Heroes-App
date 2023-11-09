import { Component, OnInit } from '@angular/core';
import { HeroeService } from '../../services/heroe.service';
import { HeroeModel } from 'src/app/models/heroe.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{

  heroes: HeroeModel[]=[];
constructor( private heroeService: HeroeService){


}

ngOnInit() {

  this.heroeService.getHeroes()
  .subscribe( resp => this.heroes = resp);

      }

}



