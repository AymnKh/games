import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ApiResponse, Game, MoviesApiRes, ScreenshotAPiRes} from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiUrl = "https://api.rawg.io/api/games";

  constructor(private http: HttpClient) { }

  getGamesList(ordering: string, search?: string):Observable<ApiResponse<Game>> {
    let params = new HttpParams().set('ordering', ordering);
    if (search) {
      params = new HttpParams().set('ordering', ordering).set('search', search);
    }

    return this.http.get<ApiResponse<Game>>(this.apiUrl, {
      params:params
    })
  }

  getGameDetails(id: string): Observable<Game> {
    return this.http.get<Game>(`${this.apiUrl}/${id}`);
  }
  getScreenShots(id:String):Observable<ScreenshotAPiRes>{
    return this.http.get<ScreenshotAPiRes>(`${this.apiUrl}/${id}/screenshots`);
  }
  getMovies(id:string):Observable<MoviesApiRes>{
    return this.http.get<MoviesApiRes>(`${this.apiUrl}/${id}/movies`);
  }
}
