import {Component} from 'angular2/core';
import {Api} from "../../../services/api";
import {RouteParams} from "angular2/router"
import {PersonsForm} from '../create/PersonForm';
 
@Component({
    templateUrl: './app/components/forms/edit/index.html',
    directives: [PersonsForm]
})
 
export class PersonEditComponent
{
    person: Object = {};
    constructor(private _api: Api, private _params: RouteParams)
    {
        this._api.getPersons(_params.get("id")).then(
            (res) => {
                this.person = res; //res.person
            },
            (error) => {
                console.error(error);
            }
        )
    }
}