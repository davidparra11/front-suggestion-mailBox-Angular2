System.register(['angular2/core', 'angular2/router', "../../../services/api"], function(exports_1, context_1) {
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
    var core_1, router_1, api_1;
    var PersonsForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (api_1_1) {
                api_1 = api_1_1;
            }],
        execute: function() {
            PersonsForm = (function () {
                function PersonsForm(_router, _api) {
                    this._router = _router;
                    this._api = _api;
                    this.isUpdate = false;
                    this.errors = [];
                }
                PersonsForm.prototype.processPerson = function (person) {
                    !this.isUpdate ? this.save(person) : this.update(person);
                };
                PersonsForm.prototype.save = function (person) {
                    var _this = this;
                    var person_string = this._personString(person);
                    this._api.createPerson(person_string).then(function (res) {
                        console.log(res);
                        _this._router.navigate(['/Persons']);
                    }, function (error) {
                        console.log("error" + error);
                        if (error.status === 422) {
                            _this.errors = [];
                            var errors = error.json();
                            for (var key in errors) {
                                _this.errors.push(errors[key]);
                            }
                        }
                    });
                };
                PersonsForm.prototype.update = function (person) {
                    var _this = this;
                    var person_string = this._personString(person);
                    this._api.updatePerson(person_string, person.id).then(function (res) {
                        _this._router.navigate(['/Persons']);
                    }, function (error) {
                        if (error.status === 422) {
                            _this.errors = [];
                            var errors = error.json();
                            for (var key in errors) {
                                _this.errors.push(errors[key]);
                            }
                        }
                    });
                };
                PersonsForm.prototype._personString = function (person) {
                    return "&name=" + person.name +
                        "&email=" + person.email +
                        "&mobile=" + person.mobile +
                        "&suggest=" + person.suggest;
                };
                __decorate([
                    core_1.Input('person'), 
                    __metadata('design:type', Object)
                ], PersonsForm.prototype, "person", void 0);
                __decorate([
                    core_1.Input('isUpdate'), 
                    __metadata('design:type', Boolean)
                ], PersonsForm.prototype, "isUpdate", void 0);
                __decorate([
                    core_1.Input('action'), 
                    __metadata('design:type', String)
                ], PersonsForm.prototype, "action", void 0);
                PersonsForm = __decorate([
                    core_1.Component({
                        selector: 'persons-form',
                        templateUrl: './app/components/forms/form/persons-form.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, api_1.Api])
                ], PersonsForm);
                return PersonsForm;
            }());
            exports_1("PersonsForm", PersonsForm);
        }
    }
});
//# sourceMappingURL=PersonForm.js.map