import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./other/navbar/navbar.component";
import {HttpHeaders} from "@angular/common/http";

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
  API_URL_POKEMON:string = "";
  API_TOKEN:string = "Maxime";

  ngOnInit():void {

    /* GESTION DE L'API */
    if (this.APP_ENV == "DEV") {
      this.API_URL = "https://api.chucknorris.io/jokes/";
      this.API_URL_POKEMON = "http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon";
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

  token:string = "exemple"

  createCorsToken(): {headers: HttpHeaders} {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+this.token,
    });
    const options: {headers: HttpHeaders}  = { headers: headers };

    return options;
  }

  createCors(): {headers: HttpHeaders} {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    const options: {headers: HttpHeaders}  = { headers: headers };

    return options;
  }


}
