import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  @Input() customers:Customer[];
  @Input() seat:number;
  @Output() customersEvent = new EventEmitter();

  foodList: any[][] = [["Hamburgare",65], ["Vegodelux", 85], ["Pizza", 97], ["Padthai",65]];

  drinkList: any[][] = [["Zingo", 20], ["Pepsi", 25 ],["Cuba-Cola", 15], ["Juice", 10]];

  candyList: any[][] = [["Bilar", 20 ],["Hallon båtar ", 15 ], [" Popcorn XXL", 35 ],["Popcorn Medium", 15 ], ["Popcorn liten", 15 ]]

  constructor() { }

  ngOnInit(): void {
  }

  public buyCandy(candy:any){

    console.log(candy[1]);
    this.customers[this.seat].candy.push(candy[0]);
    this.customers[this.seat].sum = candy[1] + this.customers[this.seat].sum; 
    this.customersEvent.emit(this.customers);

  }

  public removeCandy(candy:any){

    console.log(candy[1]);
    let index = this.customers[this.seat].candy.indexOf(candy[0]);
    if(index != -1){
      this.customers[this.seat].candy.splice(index, 1);
      this.customers[this.seat].sum = this.customers[this.seat].sum - candy[1];
      this.customersEvent.emit(this.customers);
    }
    
    console.log(this.customers[this.seat]);

  }

  public buyFood(food:any){

    
    this.customers[this.seat].food.push(food[0]);
    this.customers[this.seat].sum = this.customers[this.seat].sum + food[1];
    console.log(this.customers[this.seat]);
    this.customersEvent.emit(this.customers); 
    
  }

  public removeFood(food:any){

    console.log(food);

    let index = this.customers[this.seat].food.indexOf(food[0]);
    console.log(index);
    if(index !=-1){

      this.customers[this.seat].food.splice( index, 1);
      this.customers[this.seat].sum = this.customers[this.seat].sum - food[1];
      console.log(this.customers[this.seat]);
      this.customersEvent.emit(this.customers);
    }
    

  }

  public buyDrinks(drinks:any){

    this.customers[this.seat].drinks.push(drinks[0]);
    this.customers[this.seat].sum = this.customers[this.seat].sum + drinks[1];
    console.log(this.customers[this.seat]);
    this.customersEvent.emit(this.customers);
  }

  public removeDrinks(drinks:any){

    let index = this.customers[this.seat].drinks.indexOf(drinks[0]);
    if(index != -1){
      this.customers[this.seat].drinks.splice(index, 1);
      this.customers[this.seat].sum = this.customers[this.seat].sum - drinks[1];
    }
    console.log(this.customers[this.seat]);
    this.customersEvent.emit(this.customers);

  }

}
