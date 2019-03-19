import { Component, OnInit } from '@angular/core';
import {Product} from '../product/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: Product[] = [
    {
      id: 1,
      name: 'Pencil',
      price: 100,
      desc: 'Pencil is cheap'
    },
    {
      id: 1,
      name: 'Pencil',
      price: 100,
      desc: 'Pencil is cheap'
    },
    {
      id: 1,
      name: 'Pencil',
      price: 100,
      desc: 'Pencil is cheap'
    },
    {
      id: 1,
      name: 'Pencil',
      price: 100,
      desc: 'Pencil is cheap'
    },
    {
      id: 1,
      name: 'Pencil',
      price: 100,
      desc: 'Pencil is cheap'
    },
    {
      id: 1,
      name: 'Pencil',
      price: 100,
      desc: 'Pencil is cheap'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
