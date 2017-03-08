import {Http, Headers, Response} from "angular2/http"
import {Injectable} from "angular2/core"
import {Form} from "../interfaces/Form"
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';
 
@Injectable()
export class Api
{
    apiUrl: string = "http://localhost:8000/api/api/person/";
    headers: Headers = new Headers;
    persons$: Observable<Form[]>;
    private _personObserver: Observer<Form[]>;
    private _dataStore: {
        persons: Form[]
    };
 
    constructor(private _http: Http)
    {
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.headers.append('X-Requested-With', 'XMLHttpRequest');
 
        this.persons$ = new Observable(observer => this._personObserver = observer).share();
        this._dataStore = { persons: [] };
    }
 
    public getperson()
    {
        this._http.get(this.apiUrl).map(response => response.json()).subscribe(data => {
            this._dataStore.persons = data.person;
            this._personObserver.next(this._dataStore.persons);
        }, error => console.log('Could not load person.'));
    }
 
    public getPersons(id)
    {
        return new Promise((resolve, reject) =>
        {
            this._http.get(this.apiUrl + id)
                .map((res: Response) => res.json())
                .subscribe(
                    (res) => {
                        resolve(res);
                    },
                    (error) => {
                        reject(error);
                    }
                );
        })
    }
 
    public createPerson(person)
    {  console.log(person);
        return new Promise((resolve, reject) => {
            this._http.post(this.apiUrl, person, {
                headers: this.headers
            })
            .map((res: Response) => res.json())
            .subscribe(
                (res) => {
                    resolve(res);
                },
                (error) => {
                    reject(error);
                }
            );
        })
    }
 
    public updatePerson(person, id)
    {
        return new Promise((resolve, reject) => {
            this._http.patch(this.apiUrl + id, person, {
                headers: this.headers
            })
            .map((res: Response) => res.json())
            .subscribe(
                (res) => {
                    resolve(res);
                },
                (error) => {
                    reject(error);
                }
            );
        })
    }
 
    public deletePerson(id)
    {
        this._http.delete(this.apiUrl + id, {
            headers: this.headers
        }).subscribe(response => {
            this._dataStore.persons.forEach((t, i) => {
                if (t.id === id) { this._dataStore.persons.splice(i, 1); }
            });
            this._personObserver.next(this._dataStore.persons);
        }, error => console.log('Could not delete person.'));
    }
}