System.register(["@angular/http", "@angular/core", "rxjs/RX", 'rxjs/add/operator/map', 'rxjs/add/operator/catch'], function(exports_1, context_1) {
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
    var http_1, core_1, RX_1;
    var BranchService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (RX_1_1) {
                RX_1 = RX_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            let BranchService = class BranchService {
                constructor(http) {
                    this.http = http;
                }
                getBranchList() {
                    return this.http.get("/api/branch/")
                        .map(s => s.json())
                        .catch(err => RX_1.Observable.throw(err.json().error));
                }
            };
            BranchService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
            ], BranchService);
            exports_1("BranchService", BranchService);
        }
    }
    var _a;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9icmFuY2gvYnJhbmNoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVlBO2dCQUVJLFlBQW9CLElBQVM7b0JBQVQsU0FBSSxHQUFKLElBQUksQ0FBSztnQkFFN0IsQ0FBQztnQkFFRCxhQUFhO29CQUNULE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUM7eUJBQzNCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO3lCQUNsQixLQUFLLENBQUMsR0FBRyxJQUFJLGVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzlELENBQUM7WUFDTCxDQUFDO1lBWkQ7Z0JBQUMsaUJBQVUsRUFBRTs7NkJBQUE7WUFDYix5Q0FXQyxDQUFBIiwiZmlsZSI6ImFwcC9icmFuY2gvYnJhbmNoLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9SWFwiO1xyXG5pbXBvcnQge0JyYW5jaH0gZnJvbSBcIi4vYnJhbmNoXCI7XHJcblxyXG4vLyBpbXBvcnQgJy4uL3J4anMtZXh0ZW5zaW9ucyc7XHJcblxyXG5cclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJyYW5jaFNlcnZpY2V7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOkh0dHApe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRCcmFuY2hMaXN0KCk6T2JzZXJ2YWJsZTxCcmFuY2hbXT57XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXCIvYXBpL2JyYW5jaC9cIilcclxuICAgICAgICAgICAgICAgIC5tYXAocyA9PiBzLmpzb24oKSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnIuanNvbigpLmVycm9yKSk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
