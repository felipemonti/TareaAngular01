import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PizzasService } from 'src/app/services/pizzas.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent {

  pizza:any = {};

  constructor(private activatedRoute: ActivatedRoute, private _pizzasService: PizzasService) {
      this.activatedRoute.params.subscribe(params=> {
        console.log(params);
        this.pizza = this._pizzasService.getPizza(params['id']);
        console.log(this.pizza);
      })
   }

}
