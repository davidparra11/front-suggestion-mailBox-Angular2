import {Component} from 'angular2/core';
import {Api} from "../../../services/api";
import {PersonsForm} from '../create/PersonForm';
 
@Component({
    selector: 'person-create',
    templateUrl: './app/components/forms/create/index.html',
    directives: [PersonsForm]
})
 
export class PersonCreateComponent
{
    person: Object = {
        name: '',
        email: '',
        mobile: '',
        suggest: ''
    };
}