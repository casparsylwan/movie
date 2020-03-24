import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  customers: Customer[] = new Array();
  customerSeat:number = 0;
  totalSum:number = 0;
  cust:Customer = new Customer();
  tickets: number = 1;
  movieName: string = "";
  movieDate: string = "2020-03-25";
  id:number;

  set:Set<number> = new Set<number>(); 

  begin: boolean = false;


  // Booleans show or not show
  movieBol: boolean = true;
  opacity: boolean = false;
  moviePicked: boolean = false;
  timeSet: boolean = false;
  setSeats:boolean = false;
  confirm:boolean = false;

  in: number = 1;

  seats: number = 20;

  movieList: any = ["Avatar", "Harry Potter", "Matrix", "Alfons Åberg", "Forest Gump"];

  constructor() { }

  ngOnInit(): void {
  }

  public getNumberOfTickets() {

    console.log(this.tickets);
    this.begin = true;
  }

  public getMovie(movie: string) {

    this.movieName = movie;
    this.moviePicked = true;
    this.movieChoice();
  }

  public setDateAndTime() {
    console.log("Hej");

    this.movieDate = this.movieDate + " klockan 19:00";
    this.timeSet = true;
    

  }


  public getSeats(seat: number) {

    

    if ((this.customers.length <= this.tickets) && !(this.set.has(seat))) {

      console.log(this.set.has(seat));
      this.set.add(seat);

      let cust = new Customer();
      cust.seat = seat;
      
      this.customers.push(cust);
    }else if(this.set.has(seat)){
      console.log(this.set.has(seat));
      this.set.delete(seat);
      let index = this.customers.findIndex(e =>{
        e.seat === seat;
        
        
      });
      this.customers.splice( index, seat)

    }
    if(this.customers.length >= this.tickets){
      this.setSeats = true;
    }
    
  }

  public movieChoice() {

    console.log(this.movieBol);

    this.movieBol = !this.movieBol;
    this.opacity = !this.opacity;

  }

  public buyFood( index:number ){

    this.customerSeat = index;
  //  let customer = this.customers.find(e => e.seat== seat);
    let customer = this.customers[index];
    //this.router.navigate(['', customer.seat]);
    //console.log(customer);

  }

  public calculateTotalSum(){
    this.totalSum = 0;
    for(let i=0; i<this.customers.length; i++){
      this.totalSum += this.customers[i].sum;
    }

  }

  public confirmOrder(){
    this.confirm = true;
  }

}
