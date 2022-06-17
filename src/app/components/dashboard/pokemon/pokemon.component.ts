import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { pokemonI } from '../../../interfaces/pokemon-content.interface';

import { GetPokemonService } from '../../../services/get-pokemon.service'

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})



export class PokemonComponent implements OnInit {
  public pokemons: any[] = [];
  public pokemonData!: pokemonI;

  public inicio: boolean = true;
  

  constructor(private _pokemonService: GetPokemonService, private router: Router) {
    // window.localStorage.clear();
  }

  ngOnInit(): void {

      this.getPokemon();

  }

  getPokemon(): void {
    console.log("dentro de inicio")

    for (let i = 1; i < 30; i++) {
      this._pokemonService.getPokemon(i).subscribe({
        next: ((pokemon: any) => {

          this.pokemonData = {
            id: pokemon.id,
            name: pokemon.forms[0].name,
            image: pokemon.sprites.front_default
          }

          this.pokemons.push(this.pokemonData)
          if(i >= 29){
            console.log(pokemon)
            localStorage.setItem('pokemonL', JSON.stringify(this.pokemons));
          }

        }),
        error: ((error: any) => {
          console.log(error)
        })
      })
    }

  }


}
