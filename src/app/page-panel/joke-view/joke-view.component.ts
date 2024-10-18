import {Component, OnInit} from '@angular/core';
import {JokeService} from "../../_service/joke.service";
import {AppComponent} from "../../app.component";
import {JokeInterface} from "../../_interface/joke.interface";

@Component({
  selector: 'app-joke-view',
  standalone: true,
  imports: [],
  templateUrl: './joke-view.component.html',
  styleUrl: './joke-view.component.css'
})
export class JokeViewComponent implements OnInit {

  jokeOne:JokeInterface|undefined;

  constructor(
    private jokeService: JokeService,
    private appComponent: AppComponent
  ) { }

  ngOnInit() {

    this.jokeService.getJokeRandom(this.appComponent.API_URL).subscribe( (jokeResponse:JokeInterface)=> {
      this.jokeOne = jokeResponse;
    });



  }


}
