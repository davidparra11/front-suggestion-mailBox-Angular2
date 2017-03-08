System.register(["angular2/core", "../forms/PersonListComponent", "../forms/edit/PersonEditComponent", "../forms/create/PersonCreateComponent", "../forms/detail/PersonDetailComponent", 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, PersonListComponent_1, PersonEditComponent_1, PersonCreateComponent_1, PersonDetailComponent_1, router_1;
    var InitComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (PersonListComponent_1_1) {
                PersonListComponent_1 = PersonListComponent_1_1;
            },
            function (PersonEditComponent_1_1) {
                PersonEditComponent_1 = PersonEditComponent_1_1;
            },
            function (PersonCreateComponent_1_1) {
                PersonCreateComponent_1 = PersonCreateComponent_1_1;
            },
            function (PersonDetailComponent_1_1) {
                PersonDetailComponent_1 = PersonDetailComponent_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            InitComponent = (function () {
                function InitComponent() {
                }
                InitComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/persons', name: 'Persons', component: PersonListComponent_1.PersonListComponent },
                        { path: '/persons/:id', name: 'PersonDetail', component: PersonDetailComponent_1.PersonDetailComponent },
                        { path: '/persons/edit/:id', name: 'PersonEdit', component: PersonEditComponent_1.PersonEditComponent },
                        { path: '/persons/create', name: 'PersonCreate', component: PersonCreateComponent_1.PersonCreateComponent },
                        { path: '/', name: 'root', redirectTo: ['/Persons'] }
                    ]),
                    core_1.Component({
                        selector: "init",
                        templateUrl: './app/components/init/init.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], InitComponent);
                return InitComponent;
            }());
            exports_1("InitComponent", InitComponent);
        }
    }
});
//# sourceMappingURL=InitComponent.js.map