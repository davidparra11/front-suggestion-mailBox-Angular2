import {Component} from 'angular2/core';
import {RouteParams} from "angular2/router"
import {Api} from "../services/api";
 
import {
    ROUTER_DIRECTIVES
} from 'angular2/router';
 
@Component({
    templateUrl: './app/components/forms/detail/index.html',
    directives: [ROUTER_DIRECTIVES]
})
 
export class FormComponent
{
    persons: Object;
    selectedPerson: Object = {};
    constructor(private _api: Api)
    {
        this.persons = this._api.persons$;
        this._api.getperson();
    }
}