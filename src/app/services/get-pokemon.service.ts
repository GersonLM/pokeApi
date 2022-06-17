import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class GetPokemonService {

  public url: string = environment.urlAPI
  public data: any ;

  constructor(public _service: HttpClient) { }

  getPokemon(index: any): Observable<any > {
    return this._service.get<any>(`${this.url}/pokemon/${index}`)
  }

}
