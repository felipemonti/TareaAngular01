import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PizzasComponent } from './components/pizzas/pizzas.component';
import { PizzaComponent } from './components/pizza/pizza.component';



//DEFINICIÓN DE RUTAS

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'pizzas', component: PizzasComponent},
    {path: 'pizza/:id', component: PizzaComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
