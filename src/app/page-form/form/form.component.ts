import { Component } from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {PokemonService} from "../../_service/pokemon.service";
import {AppComponent} from "../../app.component";
import {ResultApiPokemonInterface} from "../../_interface/result-api-pokemon.interface";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  constructor(private pokemonService: PokemonService,
              private appComponent: AppComponent) {
  }


  onSubmit(form: NgForm):void {
    this.pokemonService.addPokemon(this.appComponent.API_URL_POKEMON, this.appComponent.API_TOKEN, form.value, this.appComponent.createCors()).subscribe((reponse:ResultApiPokemonInterface)=>{
      console.log(reponse);
    })

  }


}
