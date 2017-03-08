import {Component} from "angular2/core"
import {PersonListComponent} from "../forms/PersonListComponent";
import {PersonEditComponent} from "../forms/edit/PersonEditComponent";
import {PersonCreateComponent} from "../forms/create/PersonCreateComponent";
import {PersonDetailComponent} from "../forms/detail/PersonDetailComponent";
 
import {
    RouteConfig,
    ROUTER_DIRECTIVES
} from 'angular2/router';
 
@RouteConfig([
    {path:'/persons',           name: 'Persons',        component: PersonListComponent},
    {path:'/persons/:id',       name: 'PersonDetail',   component: PersonDetailComponent},
    {path:'/persons/create',    name: 'PersonCreate',   component: PersonCreateComponent},
    {path:'/', name: 'root', redirectTo: ['/Persons']}
])
 
@Component({
    selector: "init",
    templateUrl: './app/components/init/init.html',
    directives: [ROUTER_DIRECTIVES]
})
 
export class InitComponent {
    
}