import { Component } from '@angular/core';
import {FormComponent} from "./form/form.component";

@Component({
  selector: 'app-page-form',
  standalone: true,
  imports: [
    FormComponent
  ],
  templateUrl: './page-form.component.html',
  styleUrl: './page-form.component.css'
})
export class PageFormComponent {

}
