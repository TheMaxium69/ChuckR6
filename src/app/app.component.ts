import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./other/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  /*
  *
  * VARIABLE GLOBAL
  *
  * */

  APP_ENV:string = "DEV"; /* PROD or DEV*/
  API_URL:string = "";

  ngOnInit():void {

    /* GESTION DE L'API */
    if (this.APP_ENV == "DEV") {
      this.API_URL = "http://localhost:8080/api";
    } else if(this.APP_ENV == "PROD") {
      this.API_URL = "http://localhost:8080/api";
    } else {
      this.API_URL = "http://localhost:8080/api";
    }

  }

  /*
  *
  * FUNCTION GLOBAL
  *
  * */

  createCors(){

  }


}
