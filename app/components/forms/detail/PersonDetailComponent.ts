import {Component} from 'angular2/core';
import {RouteParams} from "angular2/router"
import {Api} from "../../../services/api";
 
import {
    ROUTER_DIRECTIVES
} from 'angular2/router';
 
@Component({
    templateUrl: './app/components/forms/detail/index.html',
    directives: [ROUTER_DIRECTIVES]
})
 
export class PersonDetailComponent
{
    person: Object = {};
    constructor(private _api: Api, private _params: RouteParams)
    {
        this._api.getPersons(_params.get("id")).then(
            (res) => {
                this.person = res.person;
            },
            (error) => {
                console.error(error);
            }
        )
    }
}