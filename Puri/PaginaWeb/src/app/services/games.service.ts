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
  url_corte = 'http://localhost:3000/api/corte';
  fin = 'http://localhost:3000/api/puri';
  cliente = 'http://localhost:3000/api/prepago';


  constructor(private http: HttpClient) { }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.API_URI}/puri`);
  }

  getCortes(): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.fin}/fin`);
  }

  getCorte(): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.url_corte}/daily-sales`);
  }
  getGame(id: string): Observable<Game> {
    return this.http.get<Game>(`${this.API_URI}/puri/${id}`);
  }

  deleteGame(id: string): Observable<any> {
    return this.http.delete(`${this.API_URI}/puri/${id}`);
  }

  saveGame(game: Game): Observable<Game> {
    return this.http.post<Game>(`${this.API_URI}/puri/`, game);
  }

  updateGame(id: string | number, updatedGame: Game): Observable<Game> {
    return this.http.put<Game>(`${this.API_URI}/puri/${id}`, updatedGame);
  }
  getCliente(): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.cliente}/`);
  }

  
}
