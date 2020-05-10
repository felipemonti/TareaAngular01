import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pizza-tarjeta',
  templateUrl: './pizza-tarjeta.component.html',
  styleUrls: ['./pizza-tarjeta.component.css']
})
export class PizzaTarjetaComponent implements OnInit {

  @Input() pizza: any = {};
  @Input() index: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }


  verPizza(){
    this.router.navigate(['/pizza', this.index]);
  }

}
