import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  items:Item[]=[
    {id:1, name:"book", price:200, quantity:5},
    {id:2, name:"e-book", price:100, quantity:0},
    {id:3, name:"pdf book", price:300, quantity:50}
  ];

  getItems():Item[]{
    return this.items;
  }

  updateQuantity(product: String):void{
    this.items.forEach(element => {
      if(product==element.name)
        element.quantity--;
    });
  }

  itemToBeUpdated:Item = new Item();

  setItemToBeUpdated(product:number):void{
    let item=this.items.at(product);
    if(item!=null)
    {
      this.itemToBeUpdated=item;
    }
  }

  getItemToBeUpdated():Item{
    return this.itemToBeUpdated;
  }
}
