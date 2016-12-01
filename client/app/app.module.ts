import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';

//custom module
import { FilterModule } from './components/filter-text/filter.module';

import { AppComponent }  from './app.component';
import { itemsComponent } from './components/items/items.component';

@NgModule({
  imports:      [ BrowserModule,HttpModule, FormsModule, FilterModule ],
  declarations: [ AppComponent, itemsComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }