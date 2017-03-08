System.register(['angular2/core', "../../../services/api", "angular2/router", '../create/PersonForm'], function(exports_1, context_1) {
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
    var core_1, api_1, router_1, PersonForm_1;
    var PersonEditComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (api_1_1) {
                api_1 = api_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (PersonForm_1_1) {
                PersonForm_1 = PersonForm_1_1;
            }],
        execute: function() {
            PersonEditComponent = (function () {
                function PersonEditComponent(_api, _params) {
                    var _this = this;
                    this._api = _api;
                    this._params = _params;
                    this.person = {};
                    this._api.getPersons(_params.get("id")).then(function (res) {
                        _this.person = res; //res.person
                    }, function (error) {
                        console.error(error);
                    });
                }
                PersonEditComponent = __decorate([
                    core_1.Component({
                        templateUrl: './app/components/forms/edit/index.html',
                        directives: [PersonForm_1.PersonsForm]
                    }), 
                    __metadata('design:paramtypes', [api_1.Api, router_1.RouteParams])
                ], PersonEditComponent);
                return PersonEditComponent;
            }());
            exports_1("PersonEditComponent", PersonEditComponent);
        }
    }
});
//# sourceMappingURL=PersonEditComponent.js.map