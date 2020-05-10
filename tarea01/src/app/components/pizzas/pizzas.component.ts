import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza, PizzasService } from 'src/app/services/pizzas.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent implements OnInit {

  pizzas: Pizza[] = [];
  tamagnoSeleccionado: string = "ALL";

  constructor(private router: Router, private _pizzasService: PizzasService) { }

  ngOnInit() {
    this.pizzas = this._pizzasService.getPizzas();
    console.log("pizzas: "+this.pizzas);
  }

  buscarPizza(){
    console.log(this.tamagnoSeleccionado);
    this.pizzas = this._pizzasService.buscarPizza(this.tamagnoSeleccionado);
  }


}
