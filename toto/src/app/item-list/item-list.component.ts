import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit{
  constructor (private itemservice: ItemService, private router:Router){}
  myItems:Item[]=[];
  ngOnInit(): void {
    console.log(this.itemservice.getItems());
    this.myItems=this.itemservice.getItems();
  }

  requestItem(product:String):void{
    alert("Item Requested for "+product);
  }

  buyItem(product:String):void{
    this.myItems.forEach(element => {
      if(element.name==product)
      {
        // element.quantity--;
        this.itemservice.updateQuantity(product);
        console.log(this.itemservice.getItems());
      }
      
    });
  }

  updateItem(product:number):void{
    this.router.navigate(["/update"]);
    this.itemservice.setItemToBeUpdated(product);
  }

}
