System.register(["@angular/core", "./hello.service"], function(exports_1, context_1) {
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
    var core_1, hello_service_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hello_service_1_1) {
                hello_service_1 = hello_service_1_1;
            }],
        execute: function() {
            let HomeComponent = class HomeComponent {
                constructor(helloService) {
                    this.helloService = helloService;
                }
            };
            HomeComponent = __decorate([
                core_1.Component({
                    selector: 'app-home',
                    template: '<h1> Greeting test </h1> {{greeting}}'
                }), 
                __metadata('design:paramtypes', [(typeof (_a = typeof hello_service_1.HelloService !== 'undefined' && hello_service_1.HelloService) === 'function' && _a) || Object])
            ], HomeComponent);
            exports_1("HomeComponent", HomeComponent);
        }
    }
    var _a;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9Ib21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBU0E7Z0JBRUksWUFBb0IsWUFBMEI7b0JBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO2dCQUU5QyxDQUFDO1lBRUwsQ0FBQztZQVpEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFFBQVEsRUFBRSx1Q0FBdUM7aUJBRXBELENBQUM7OzZCQUFBO1lBRUYseUNBTUMsQ0FBQSIsImZpbGUiOiJhcHAvSG9tZS9ob21lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7SGVsbG9TZXJ2aWNlfSBmcm9tIFwiLi9oZWxsby5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWhvbWUnLFxyXG4gICAgdGVtcGxhdGU6ICc8aDE+IEdyZWV0aW5nIHRlc3QgPC9oMT4ge3tncmVldGluZ319J1xyXG4gICAgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBoZWxsb1NlcnZpY2U6IEhlbGxvU2VydmljZSkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
