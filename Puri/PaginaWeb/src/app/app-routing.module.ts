import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesListComponent } from './components/games-list/games-list.component';
import { GameFormComponent } from './components/game-form/game-form.component';
import { NominaComponent } from './components/nomina/nomina.component';
import {PrepagoComponent} from './components/prepago/prepago.component';
import {ConsumoComponent} from './components/consumo/consumo.component';
import {CorteComponent} from './components/corte/corte.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/corte ',
    pathMatch: 'full'
  },
  {
    path: 'games',
    component: GamesListComponent
  },
  {
    path: 'games/add',
    component: GameFormComponent
  },
  {
    path: 'games/edit/:id',
    component: GameFormComponent
  },
  {
    path: 'nomina',
    component: NominaComponent
  }
  ,
  {
    path: 'prepago',
    component: PrepagoComponent
  },
  {
    path: 'consumo',
    component: ConsumoComponent
  }
  ,
  {
    path: 'corte',
    component: CorteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
