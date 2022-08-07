import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemanService {

  constructor(private http:HttpClient) { }

  public getAllPokemans(){
    const URL = 'https://pokeapi.co/api/v2/pokemon?limit=50';
    return this.http.get(URL);
  }
}
