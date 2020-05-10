import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {

  private pizzas:Pizza[] =
  [
    {
      nombre: "Pizza Napolitana",
      tamagnos: ["XL","Familiar","Mediana","Pequeña" ],
      img: "assets/img/napolitana.jpg",
      ingredientes: ["Salsa de Tomate","Queso Mozzarella", "Jamón", "Tomate", "Aceitunas", "Orégano."]
    },
    {
      nombre: "Pizza Azurra",
      tamagnos: ["XL","Familiar","Mediana","Pequeña" ],
      img: "assets/img/azurra.jpg",
      ingredientes: ["Salsa de tomate", "Queso Mozarella", "Champiñones", "Tomate", "Cebolla", "Orégano."]
    },
    {
      nombre: "Pizza Fugaza",
      tamagnos: ["XL","Familiar","Mediana","Pequeña" ],
      img: "assets/img/fugaza.jpg",
      ingredientes: ["Salsa de Tomate", "Queso Mozzarella", "Cebolla", "Albaca", "Pimienta Blanca", "Orégano."]
    },
  ];
  
  constructor() { 
    console.log("El servicio está listo para trabajar!!");
  }

  getPizzas(){
    return this.pizzas;
  }

  getPizza(idx:string){
    return this.pizzas[idx];
  }

  buscarPizza( tamagno:string):Pizza[]{
    let arr:Pizza[] = [];

    if(tamagno.trim() == 'ALL'){
      return this.pizzas;
    }
    
    for(let i=0; i<this.pizzas.length; i++){
        
      let pizza = this.pizzas[i];
      
      for(let j=0; j<pizza.tamagnos.length; j++){
        let tamagnoPizza = pizza.tamagnos[j];
        if(tamagnoPizza.trim() == tamagno.trim()){
          pizza.idx = i;
          arr.push(pizza);
          break;
        }  
      }
      
    }
    return arr;
  }



}

export interface Pizza {
  nombre:string;
  img: string;
  tamagnos:string[];
  ingredientes: string[];
  idx?: number;
}
