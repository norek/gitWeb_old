System.register(["@angular/core", "@angular/http", 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var HelloService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            let HelloService = class HelloService {
                constructor(http) {
                    this.http = http;
                }
                greet(name) {
                    return this.http
                        .get(`/api/hello?name=${name}`)
                        .map(res => res.text());
                }
            };
            HelloService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
            ], HelloService);
            exports_1("HelloService", HelloService);
        }
    }
    var _a;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9Ib21lL2hlbGxvLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBQ0ksWUFBb0IsSUFBVTtvQkFBVixTQUFJLEdBQUosSUFBSSxDQUFNO2dCQUU5QixDQUFDO2dCQUVELEtBQUssQ0FBQyxJQUFZO29CQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTt5QkFDWCxHQUFHLENBQUMsbUJBQW1CLElBQUksRUFBRSxDQUFDO3lCQUM5QixHQUFHLENBQUMsR0FBRyxJQUFZLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUN4QyxDQUFDO1lBRUwsQ0FBQztZQVpEO2dCQUFDLGlCQUFVLEVBQUU7OzRCQUFBO1lBQ2IsdUNBV0MsQ0FBQSIsImZpbGUiOiJhcHAvSG9tZS9oZWxsby5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0h0dHB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZSwgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIZWxsb1NlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZ3JlZXQobmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5nZXQoYC9hcGkvaGVsbG8/bmFtZT0ke25hbWV9YClcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gPHN0cmluZz5yZXMudGV4dCgpKTtcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
