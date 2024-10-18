import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {JokeInterface} from "../_interface/joke.interface";

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(
    private http: HttpClient,
  ) { }

  getJokeRandom(url:string):Observable<JokeInterface>{
    return this.http.get<JokeInterface>(url + "random");
  }










  /* CRUD DEFAULT */

  getJokeAll(){}

  getJokeOne(){}

  createJoke(){}

  deleteJoke(){}

  editJoke(){}

}
