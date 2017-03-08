import {Component, Input} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router'
import {Api} from "../../../services/api";
import {Form} from "../../../interfaces/Form";
 
@Component({
    selector: 'persons-form',
    templateUrl: './app/components/forms/form/persons-form.html',
    directives: [ROUTER_DIRECTIVES]
})
 
export class PersonsForm {
    @Input('person') person: Form;
    @Input('isUpdate') isUpdate: boolean = false;
    @Input('action') action: string;
    errors: Array<Object> = [];
 
    constructor(private _router: Router, private _api: Api){
 
    }
 
    processPerson(person): void {
        !this.isUpdate ? this.save(person) : this.update(person);
    }
 
    save(person)
    {
        let person_string = this._personString(person);
 
        this._api.createPerson(person_string).then(
            (res) => {
                console.log(res);
                this._router.navigate(['/Persons']);
            },
            (error) => {
                console.log("error" + error);
                if(error.status === 422) //código de respuesta de laravel cuando falla la validación
                {
                    this.errors = [];
                    let errors = error.json();
                    for(var key in errors) {
                         this.errors.push(errors[key]);
                    }
                }
            }
        );
    }
 
    update(person)
    {
        let person_string = this._personString(person);
 
        this._api.updatePerson(person_string, person.id).then(
            (res) => {
                this._router.navigate(['/Persons']);
            },
            (error) => {
                if(error.status === 422)//código de respuesta de laravel cuando falla la validación
                {
                    this.errors = [];
                    let errors = error.json();
                    for(var key in errors) {
                        this.errors.push(errors[key]);
                    }
                }
            }
        );
    }
 
    private _personString(person): string{
        return "&name="+person.name+
            "&email="+person.email+
            "&mobile="+person.mobile+
            "&suggest="+person.suggest;
    }
}