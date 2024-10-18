import { Component } from '@angular/core';
import {ViewPokemonComponent} from "./view-pokemon/view-pokemon.component";

@Component({
  selector: 'app-page-pokemon',
  standalone: true,
  imports: [
    ViewPokemonComponent
  ],
  templateUrl: './page-pokemon.component.html',
  styleUrl: './page-pokemon.component.css'
})
export class PagePokemonComponent {

}
