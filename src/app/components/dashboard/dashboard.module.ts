import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module'

import { PokemonComponent } from './pokemon/pokemon.component'



@NgModule({
  declarations: [
    PokemonComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DashboardModule { }
