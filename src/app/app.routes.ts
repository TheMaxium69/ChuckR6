import { Routes } from '@angular/router';
import {PagePanelComponent} from "./page-panel/page-panel.component";
import {PageHomeComponent} from "./page-home/page-home.component";
import {PageContactComponent} from "./page-contact/page-contact.component";
import {PagePokemonComponent} from "./page-pokemon/page-pokemon.component";
import {PageFormComponent} from "./page-form/page-form.component";

export const routes: Routes = [
  {path: '', component: PageHomeComponent},
  {path: 'panel', component: PagePanelComponent},
  {path: 'pokemon', component: PagePokemonComponent},
  {path: 'form', component: PageFormComponent},
  {path: 'contact', component: PageContactComponent},
];
