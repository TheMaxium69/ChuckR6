import { Component } from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {PokemonService} from "../../_service/pokemon.service";
import {AppComponent} from "../../app.component";

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


}
