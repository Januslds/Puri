import { Component, OnInit,HostBinding } from '@angular/core';
import { GamesService } from '../../services/games.service';
@Component({
  selector: 'app-prepago',
  templateUrl: './prepago.component.html',
  styleUrls: ['./prepago.component.css']
})
export class PrepagoComponent implements OnInit {

  
  @HostBinding('class') classes = 'row';

  clients: any = [];
  corte : any = [];

  constructor(private gameService: GamesService) { }


  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.gameService.getCliente()
      .subscribe(
        res => {
          this.clients = res;
          console.log('Datos recibidos:', this.clients);  // Verifica la estructura de los datos
        },
        err => {
          console.error('Error al obtener clientes:', err);
        }
      );
  }
  



  deleteGame(id: string) {
    this.gameService.deleteGame(id)
      .subscribe(
        res => {
          console.log(res);
          this.getClients();
        },
        err => console.error(err)
      )
  }

}
