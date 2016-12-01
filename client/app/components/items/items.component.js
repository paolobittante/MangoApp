"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
//import the item service
var item_service_1 = require('../../services/item.service');
var filter_component_1 = require('../filter-text/filter.component');
var filter_service_1 = require('../filter-text/filter.service');
var itemsComponent = (function () {
    function itemsComponent(Item, filterService) {
        var _this = this;
        this.Item = Item;
        this.filterService = filterService;
        //filter component
        this.filtereditems = this.items;
        this.Item.getItems().subscribe(function (items) {
            _this.items = items;
            console.log(items);
        });
    }
    //the searched string changed
    itemsComponent.prototype.filterChanged = function (searchText) {
        this.filtereditems = this.filterService.filter(searchText, ['_id', 'title'], this.items);
    };
    itemsComponent.prototype.getItemClass = function (item) {
        var _item = item;
        if (_item.isDone) {
            return "panel panel-primary";
        }
        else {
            return "panel panel-danger";
        }
    };
    itemsComponent.prototype.addItem = function (event) {
        var _this = this;
        event.preventDefault();
        var newItem = {
            title: this.title,
            isDone: false
        };
        this.Item.addItem(newItem).subscribe(function (item) {
            _this.items.push(item);
            _this.title = '';
        });
    };
    itemsComponent.prototype.updateStatus = function (item) {
        var _item = {
            _id: item._id,
            title: item.title,
            isDone: !item.isDone
        };
        this.Item.updateStatus(_item).subscribe(function (data) {
            item.isDone = !item.isDone;
        });
    };
    itemsComponent.prototype.deleteItem = function (id) {
        var items = this.items;
        this.Item.deleteItem(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < items.length; i++) {
                    if (items[i]._id == id) {
                        items.splice(i, 1);
                    }
                }
            }
        });
    };
    __decorate([
        core_1.ViewChild(filter_component_1.FilterComponent), 
        __metadata('design:type', filter_component_1.FilterComponent)
    ], itemsComponent.prototype, "filterComponent", void 0);
    itemsComponent = __decorate([
        core_1.Component({
            //per usare il relative path aggiungi moduleID
            moduleId: module.id,
            selector: 'items',
            templateUrl: 'items.component.html'
        }), 
        __metadata('design:paramtypes', [item_service_1.ItemService, filter_service_1.FilterService])
    ], itemsComponent);
    return itemsComponent;
}());
exports.itemsComponent = itemsComponent;
//# sourceMappingURL=items.component.js.map