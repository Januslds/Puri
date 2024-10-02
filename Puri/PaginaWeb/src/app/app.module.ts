import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { GameFormComponent } from './components/game-form/game-form.component';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

// Importar el Pipe personalizado
import { FilterByIdPipe } from './pipes/filter-date.pipe';
import { NominaComponent } from './components/nomina/nomina.component';
import { PrepagoComponent } from './components/prepago/prepago.component';
import { VentaprepagoComponent } from './components/ventaprepago/ventaprepago.component';
import { ConsumoComponent } from './components/consumo/consumo.component';
import { CorteComponent } from './components/corte/corte.component';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GamesListComponent,
    GameFormComponent,
    // Agregar el Pipe personalizado aquí en 'declarations'
    FilterByIdPipe,
    NominaComponent,
    PrepagoComponent,
    VentaprepagoComponent,
    ConsumoComponent,
    CorteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
