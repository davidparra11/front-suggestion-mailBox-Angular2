import {Component} from 'angular2/core';
import {RouteParams} from "angular2/router"
import {Api} from "../services/api";
 
import {
    ROUTER_DIRECTIVES
} from 'angular2/router';
 
@Component({
    templateUrl: './app/components/courses/detail/index.html',
    directives: [ROUTER_DIRECTIVES]
})
 
export class FormComponent
{
    persons: Object;
    selectedCourse: Object = {};
    constructor(private _api: Api)
    {
        this.persons = this._api.persons$;
        this._api.getperson();
    }
}