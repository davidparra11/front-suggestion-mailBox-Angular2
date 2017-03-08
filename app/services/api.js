System.register(["angular2/http", "angular2/core", 'rxjs/Rx', 'rxjs/Observable', 'rxjs/add/operator/share', 'rxjs/add/operator/map'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1, Observable_1;
    var Api;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_2) {},
            function (_3) {}],
        execute: function() {
            Api = (function () {
                function Api(_http) {
                    var _this = this;
                    this._http = _http;
                    this.apiUrl = "http://localhost:8000/api/api/person";
                    this.headers = new http_1.Headers;
                    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    this.headers.append('X-Requested-With', 'XMLHttpRequest');
                    this.persons$ = new Observable_1.Observable(function (observer) { return _this._personObserver = observer; }).share();
                    this._dataStore = { persons: [] };
                }
                Api.prototype.getperson = function () {
                    var _this = this;
                    this._http.get(this.apiUrl).map(function (response) { return response.json(); }).subscribe(function (data) {
                        _this._dataStore.persons = data.person;
                        _this._personObserver.next(_this._dataStore.persons);
                    }, function (error) { return console.log('Could not load person.'); });
                };
                Api.prototype.getPersons = function (id) {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        _this._http.get(_this.apiUrl + id)
                            .map(function (res) { return res.json(); })
                            .subscribe(function (res) {
                            resolve(res);
                        }, function (error) {
                            reject(error);
                        });
                    });
                };
                Api.prototype.createPerson = function (person) {
                    var _this = this;
                    console.log(person);
                    return new Promise(function (resolve, reject) {
                        _this._http.post(_this.apiUrl, person, {
                            headers: _this.headers
                        })
                            .map(function (res) { return res.json(); })
                            .subscribe(function (res) {
                            resolve(res);
                        }, function (error) {
                            reject(error);
                        });
                    });
                };
                Api.prototype.updatePerson = function (person, id) {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        _this._http.patch(_this.apiUrl + id, person, {
                            headers: _this.headers
                        })
                            .map(function (res) { return res.json(); })
                            .subscribe(function (res) {
                            resolve(res);
                        }, function (error) {
                            reject(error);
                        });
                    });
                };
                Api.prototype.deletePerson = function (id) {
                    var _this = this;
                    this._http.delete(this.apiUrl + id, {
                        headers: this.headers
                    }).subscribe(function (response) {
                        _this._dataStore.persons.forEach(function (t, i) {
                            if (t.id === id) {
                                _this._dataStore.persons.splice(i, 1);
                            }
                        });
                        _this._personObserver.next(_this._dataStore.persons);
                    }, function (error) { return console.log('Could not delete person.'); });
                };
                Api = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], Api);
                return Api;
            }());
            exports_1("Api", Api);
        }
    }
});
//# sourceMappingURL=api.js.map