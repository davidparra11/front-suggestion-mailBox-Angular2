System.register(['angular2/core', "../../services/api", 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, api_1, router_1;
    var PersonListComponent;
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
            }],
        execute: function() {
            PersonListComponent = (function () {
                function PersonListComponent(_api) {
                    this._api = _api;
                    this.selectedPerson = {};
                    this.persons = this._api.persons$;
                    this._api.getperson();
                }
                PersonListComponent = __decorate([
                    core_1.Component({
                        selector: 'person',
                        templateUrl: './app/components/forms/list/index.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [api_1.Api])
                ], PersonListComponent);
                return PersonListComponent;
            }());
            exports_1("PersonListComponent", PersonListComponent);
        }
    }
});
//# sourceMappingURL=PersonListComponent.js.map