import { Component,EventEmitter, Output  } from '@angular/core';


@Component({
  //per usare il relative path aggiungi moduleID
  moduleId:module.id,
  selector: 'filter-text',
  templateUrl: 'filter.component.html'
})

export class FilterComponent{
    @Output() changed: EventEmitter<string>;

    filter:string;

    constructor(){
        this.changed = new EventEmitter<string>();

        // component.UpgradeDom();
    }

    clear(){
        this.filter = '';
    }

    filterChanged(event:any){
        event.preventDefault();
        console.log('Filter changed ' + this.filter );
        this.changed.emit(this.filter);
    }

}