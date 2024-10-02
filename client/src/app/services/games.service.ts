import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/Game';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.API_URI}/games`);
  }

  getGame(id: string): Observable<Game> {
    return this.http.get<Game>(`${this.API_URI}/games/${id}`);
  }

  deleteGame(id: string): Observable<any> {
    return this.http.delete(`${this.API_URI}/games/${id}`);
  }

  saveGame(game: Game): Observable<Game> {
    return this.http.post<Game>(`${this.API_URI}/games`, game);
  }

  updateGame(id: string | number, updatedGame: Game): Observable<Game> {
    return this.http.put<Game>(`${this.API_URI}/games/${id}`, updatedGame);
  }

  
}
