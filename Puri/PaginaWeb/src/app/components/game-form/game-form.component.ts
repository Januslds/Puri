import { Component, OnInit, HostBinding } from '@angular/core';
import { Game } from 'src/app/models/Game';

import { GamesService } from 'src/app/services/games.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';
  games: any = [];
  game: Game = {
    id: 0,
    vendedor: '',
    unidades: 0,
    cliente:'',
    telefono: 0,
    precio_unitario: 0,
    tipo:'',
    fecha  : new Date(),
    
  };
    ga
  edit: boolean = false;

  constructor(private gameService: GamesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.gameService.getGame(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.game = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }
  getCortt() {
    this.gameService.getCortes()
      .subscribe(
        res => {
          this.games= res;
        },
        err => console.error(err)
      );
  }

  


/*  saveNewGame() {
    delete this.game.fecha_registro;
    delete this.game.id;
    this.gameService.saveGame(this.game)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/puri']);
        },
        err => console.error(err)
      )
  }*/

      saveNewGame() {
        delete this.game.fecha;
        delete this.game.id;
        this.gameService.saveGame(this.game)
          .subscribe(
            res => {
              console.log(res);
              this.openNewPageWithGameData(this.game);
            },
            err => console.error(err)
          );
      }
      
      openNewPageWithGameData(game) {
        const newWindow = window.open('', '_blank');
        const htmlContent = `
          <!DOCTYPE html>
          <html lang="es">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Ticket de venta</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                padding: 20px;
              }
              h1 {
                color: #333;
              }
              p {
                margin: 10px 0;
              }
              img {
                max-width: 100%;
                height: auto;
              }

              
            </style>
          </head>
          <body>
            <img src="${window.location.origin}/assets/sin.png">
           
            <h2>Ticket de Venta</h2>
            <p><strong>Folio :</strong> ${game.id}</p>
            <p><strong>Vendedor:</strong> ${game.vendedor}</p>
            <p><strong>Cantidad:</strong> ${game.unidades}</p>
            <p><strong>Cantidad:$</strong> ${game.unidades * game.precio_unitario}</p>
            
             <p><strong>Gracias por tu compra, espero que tengas una excelente dia </strong></p>
              <p><strong>Amigo: </strong> ${game.cliente}</p> 
              <p><strong>Celular: </strong> ${game.telefono}</p> 

          </body>
          </html>
        `;
        newWindow.document.write(htmlContent);
        newWindow.document.close();
      }
        
      getGames() {
        this.gameService.getGames()
          .subscribe(
            res => {
              this.games = res;
              console.log(res); 
            },
            err => console.error(err)
          );
      }
      
  updateGame() {
    delete this.game.fecha;
    this.gameService.updateGame(this.game.id, this.game)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/puri']);
        },
        err => console.error(err)
      )
  }
  validateAndSubmit() {
    if (this.game.telefono <= 0 || this.game.unidades <= 0 || this.game.precio_unitario <= 0) {
      alert('Los campos de teléfono, unidades y precio unitario deben ser mayores que 0.');
      return;
    }

    // Si la validación es exitosa, ejecutar la acción correspondiente
    this.edit ? this.updateGame() : this.saveNewGame();
  }

}
