import {Component, OnInit} from '@angular/core';
import {PokemonService} from "../../_service/pokemon.service";
import {PokemonInterface} from "../../_interface/pokemon.interface";
import {ResultApiPokemonInterface} from "../../_interface/result-api-pokemon.interface";
import {NgForOf} from "@angular/common";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-view-pokemon',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './view-pokemon.component.html',
  styleUrl: './view-pokemon.component.css'
})
export class ViewPokemonComponent implements OnInit{

  pokemonList: PokemonInterface[] = [];
  pokemonSelected: PokemonInterface | undefined;
  constructor(
    private unServiceCool: PokemonService,
    private appComponant:AppComponent
  ) {
  }

  ngOnInit() {

    this.unServiceCool.getPokemons(this.appComponant.API_URL_POKEMON).subscribe(pokemonListResult => {

      this.pokemonList = pokemonListResult;
      // console.table(this.pokemonList);

    });


  }


  wiewOnePokemon(id:number){
    this.unServiceCool.getPokemonById(this.appComponant.API_URL_POKEMON, id).subscribe(pokemonResult => {

      this.pokemonSelected = pokemonResult;
      console.log(this.pokemonSelected);


    });
  }


  resultMessageDelete: ResultApiPokemonInterface | undefined
  deletePokemon(id:number, index:number){
    this.unServiceCool.deletePokemon(this.appComponant.API_URL_POKEMON, this.appComponant.API_TOKEN, id).subscribe(resultatDelete => {


      this.resultMessageDelete = resultatDelete;
      console.log(this.resultMessageDelete);

      if (this.resultMessageDelete.true !== "No have permission"){
        console.log(index)

        this.pokemonList.splice(index,1);
      }

      if (this.resultMessageDelete.true == "No have permission"){

        alert("Tu n'est pas autorisé a faire ça");
      }

      if (this.resultMessageDelete.err){
        console.log("Ya une erreur");
      }


    });





  }



}
