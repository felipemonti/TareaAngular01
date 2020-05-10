//MODULOS
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//RUTAS
import { APP_ROUTING } from './app.routes';

//SERVICIOS
import { PizzasService } from './services/pizzas.service';

//COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PizzaComponent } from './components/pizza/pizza.component';
import { PizzaTarjetaComponent } from './components/pizza-tarjeta/pizza-tarjeta.component';
import { PizzasComponent } from './components/pizzas/pizzas.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PizzaComponent,
    PizzaTarjetaComponent,
    PizzasComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
    PizzasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
