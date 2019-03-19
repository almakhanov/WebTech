import { Component, OnInit } from '@angular/core';
import {Product} from './Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

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
