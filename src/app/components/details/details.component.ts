import { Component } from '@angular/core';
import {Game, Movies, ScreenshotAPiRes, Screenshots} from "../../models/game";
import {Subscription} from "rxjs";
import {ActivatedRoute, Params} from "@angular/router";
import {HttpService} from "../../services/http.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  gameId!: string;
  game = {} as Game;
  screenshots:Screenshots[]=[];
  movies:Movies[] =[];


  constructor(private route: ActivatedRoute, private httpService: HttpService) { }

  ngOnInit(): void {
   this.route.params.subscribe((params: Params) => {
      this.gameId = params['id'];
      this.getGameDetails(this.gameId);
      this.getScreenshots(this.gameId);
      this.getMovies(this.gameId);
    });
  }

  getGameDetails(id: string): void {
    this.httpService
      .getGameDetails(id)
      .subscribe((gameResp: Game) => {
        this.game = gameResp;
      });
  }
  getScreenshots(id:string){
    this.httpService.getScreenShots(id).subscribe((screenShots:ScreenshotAPiRes)=>{
     this.screenshots = screenShots.results ;
    })
  }

  getMovies(id:string){
    this.httpService.getMovies(id).subscribe(movies=>{
      this.movies = movies.results;
    })
  }

}
