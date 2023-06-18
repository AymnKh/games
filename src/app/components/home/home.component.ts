import { HttpService } from '../../services/http.service';
import { Component } from '@angular/core';
import {ApiResponse, Game} from "../../models/game";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  sort: string = '';
  games!: Array<Game>;

  constructor(private httpService: HttpService, private route: ActivatedRoute , private router:Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['game-search']) {
        this.searchGames('metacrit', params['game-search'])
      } else {
        this.searchGames('metacrit')
      }
    })
  }

  searchGames(sort: string, search?: string) {
    this.sort === 'all' ? this.sort='' : this.sort = sort ;
    this.httpService.getGamesList(sort, search)
      .subscribe((gameList: ApiResponse<Game>) => {
        this.games = gameList.results;
        console.log(gameList.results)
      })
  }

  openGameDeatils(id: string) {
    this.router.navigate(['details',id])
  }
}
