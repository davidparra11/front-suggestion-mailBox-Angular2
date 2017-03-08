import {Component, Input} from 'angular2/core';
import {Api} from "../../../services/api";
 
import {
    ROUTER_DIRECTIVES
} from 'angular2/router';
 
declare var jQuery:any;
 
@Component({
    selector: 'person-remove',
    templateUrl: './app/components/forms/remove/index.html',
    directives: [ROUTER_DIRECTIVES]
})
 
export class PersonRemoveComponent
{
    @Input('person') person: Object;
    constructor(private _api: Api)
    {
 
    }
 
    remove(id)
    {
        this._api.deletePerson(id);
        jQuery("#remove-person").modal("hide");
    }
}