import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {PokemonInterface} from "../_interface/pokemon.interface";
import {ResultApiPokemonInterface} from "../_interface/result-api-pokemon.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  //RECUPERE LE MODULE HTTPCLIENT
  constructor(private http: HttpClient) { }

  // RECUPERE TOUT LES POKEMON
  getPokemons(url:string): Observable<PokemonInterface[]>{
    return this.http.get<PokemonInterface[]>(url + "&task=getAll");
  }

  // RECUPERE UN POKEMON VIA SON ID
  getPokemonById(url:string, id:number): Observable<PokemonInterface>{
    return this.http.get<PokemonInterface>(url + "&task=getById&id=" + id);
  }

  // SUPPRIMER UN POKEMON VIA SON ID
  deletePokemon(url:string, token:string, id:number): Observable<ResultApiPokemonInterface>{
    return this.http.get<ResultApiPokemonInterface>(url + "&task=deletePokemon&userApi="+ token +"&id=" + id)
  }


}
