import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {

  private pizzas:Pizza[] =
  [
    {
      nombre: "Pizza Napolitana",
      tamagnos: ["XL", "Familiar", "Mediana" ],
      img: "assets/img/napolitana.jpg",
      ingredientes: ["Salsa de Tomate","Queso Mozzarella", "Jamón", "Tomate", "Aceitunas", "Orégano"]
    },
    {
      nombre: "Pizza Azurra",
      tamagnos: ["XL","Familiar","Pequeña" ],
      img: "assets/img/azurra.jpg",
      ingredientes: ["Salsa de tomate", "Queso Mozarella", "Champiñones", "Tomate", "Cebolla", "Orégano"]
    },
    {
      nombre: "Pizza Hawaiana",
      tamagnos: ["XL", "Familiar", "Mediana", "Pequeña" ],
      img: "assets/img/hawaiana.jpg",
      ingredientes: ["Salsa de Tomate", "Queso Mozzarella", "Piña", "Jamón", "Orégano"]
    },
    {
      nombre: "Pizza Vegetariana",
      tamagnos: ["Familiar", "Mediana", "Pequeña" ],
      img: "assets/img/vegetariana.jpg",
      ingredientes: ["Salsa de tomate", "Tomate", "Queso Mozzarella", "Choclo", "Palmitos", "Tomates", "Champiñon", "Orégano"]
    },
    {
      nombre: "Pizza Margarita",
      tamagnos: ["XL", "Mediana", "Pequeña" ],
      img: "assets/img/margarita.jpg",
      ingredientes: ["Salsa de Tomate", "Queso Mozzarella", "Carne", "Ajo", "Albaca", "Orégano"]
    },
    {
      nombre: "Pizza Española",
      tamagnos: ["Familiar", "Mediana" ],
      img: "assets/img/espanola.jpg",
      ingredientes: ["Salsa de Tomate", "Queso Mozzarella", "Choricillo", "Pimentón", "Aceituna Negra", "Orégano"]
    },
    {
      nombre: "Pizza Pacifico",
      tamagnos: ["XL", "Mediana", "Pequeña" ],
      img: "assets/img/pacifico.jpg",
      ingredientes: ["Salsa de Tomate", "Queso Mozzarella", "Camarones", "Choritos", "Ajo", "Orégano"]
    },
    {
      nombre: "Pizza Calabresa",
      tamagnos: ["XL", "Familiar" ],
      img: "assets/img/calabresa.jpg",
      ingredientes: ["Salsa de Tomate", "Queso Mozzarella", "Salame Italiano", "Pimentón Rojo", "Aceituna Negra"]
    }
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
