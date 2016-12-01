
import { Component,ViewChild } from '@angular/core';
//import the item service
import {ItemService} from '../../services/item.service';
//import the item class
import {Item} from '../../../Item';

import { FilterComponent } from '../filter-text/filter.component';
import { FilterService } from '../filter-text/filter.service';


@Component({
  //per usare il relative path aggiungi moduleID
  moduleId:module.id,
  selector: 'items',
  templateUrl: 'items.component.html'
})

export class itemsComponent {
  items: Item[];
  title: string;
  
  //filter component
  filtereditems = this.items;
  @ViewChild(FilterComponent) filterComponent: FilterComponent;

  constructor(private Item:ItemService, private filterService: FilterService){    
    this.Item.getItems()
      .subscribe(items => {
        this.items = items;
        console.log(items);
      })
  }

  //the searched string changed
  filterChanged(searchText: string) {
    this.filtereditems = this.filterService.filter(searchText, ['_id', 'title'], this.items);
  }

  getItemClass(item){
    var _item = item;
    if (_item.isDone){
      return "panel panel-primary";
    } else{
      return "panel panel-danger";
    }
  }

  addItem(event){
    event.preventDefault();
    var newItem = {
      title:this.title,
      isDone: false
    }

    this.Item.addItem(newItem)
      .subscribe(item => {
          this.items.push(item);
          this.title = '';
      });
  }

  deleteItem(id){
    var items = this.items;

    this.Item.deleteItem(id).subscribe(data => {
      if(data.n ==1){
        for(var i=0; i < items.length ; i++){
          if(items[i]._id == id){
            items.splice(i, 1);
          }
        }
      }
    });
  }

  updateStatus(item){
    var _item = {
      _id: item._id,
      title: item.title,
      isDone: !item.isDone
    };

    this.Item.updateStatus(_item).subscribe(data =>{
      item.isDone = !item.isDone;
    });
  }
}