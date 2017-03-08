import {Component} from 'angular2/core';
import {Api} from "../../services/api";
 
import {
    ROUTER_DIRECTIVES
} from 'angular2/router';
 
@Component({
    selector: 'person',
    templateUrl: './app/components/forms/list/index.html',
    directives: [ROUTER_DIRECTIVES]
})
 
export class PersonListComponent
{
    persons: Object;
    selectedPerson: Object = {};
    constructor(private _api: Api)
    {
        this.persons = this._api.persons$;
        this._api.getperson();
    }
}