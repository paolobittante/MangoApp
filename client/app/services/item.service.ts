//inject this service as dependency
import {Injectable} from '@angular/core';
import {Http, Headers } from '@angular/http';

//observable, send data as observable
import 'rxjs/add/operator/map';

@Injectable()
export class ItemService{
    constructor(private http:Http){
    }

     getItems(){
        return this.http.get('/api/items').map(res => res.json());
            //return as an observable
    }
    
    updateStatus(item){
        var headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.put('/api/item/' + item._id, JSON.stringify(item), {headers: headers}).map(res => res.json());
    }

    addItem(newItem){
        var headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post('/api/item', JSON.stringify(newItem), {headers: headers}).map(res => res.json());
    }

    deleteItem(id){
        return this.http.delete('/api/item/'+id).map(res => res.json());
    }

    
}