import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../../models/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css']
})
export class ConfirmOrderComponent implements OnInit {
  @Input() customers:Customer[];
  @Input() movieName:string;
  @Input() movieDate:string;
  @Input() totalSum:number;

  constructor(private router:Router) { }

  

  ngOnInit(): void {
  }

  public send(){

    this.router.navigate(['confirmed']);

  }

}
