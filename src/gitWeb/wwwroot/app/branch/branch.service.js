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
                    this.currentBranch = new RX_1.Observable(obs => this.observer = obs).share();
                }
                setCurrentBranch(branch) {
                    if (this.observer !== undefined)
                        this.observer.next(branch);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9icmFuY2gvYnJhbmNoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUtJLFlBQW9CLElBQVM7b0JBQVQsU0FBSSxHQUFKLElBQUksQ0FBSztvQkFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGVBQVUsQ0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDcEYsQ0FBQztnQkFFRCxnQkFBZ0IsQ0FBQyxNQUFhO29CQUMxQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQzt3QkFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDL0QsQ0FBQztnQkFFRCxhQUFhO29CQUNULE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUM7eUJBQzNCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO3lCQUNsQixLQUFLLENBQUMsR0FBRyxJQUFJLGVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzlELENBQUM7WUFDTCxDQUFDO1lBbkJEO2dCQUFDLGlCQUFVLEVBQUU7OzZCQUFBO1lBQ2IseUNBa0JDLENBQUEiLCJmaWxlIjoiYXBwL2JyYW5jaC9icmFuY2guc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL1JYXCI7XHJcbmltcG9ydCB7QnJhbmNofSBmcm9tIFwiLi9icmFuY2hcIjtcclxuaW1wb3J0IHtPYnNlcnZlcn0gZnJvbSBcInJ4anMvT2JzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCcmFuY2hTZXJ2aWNle1xyXG5cclxuICAgIGN1cnJlbnRCcmFuY2g6T2JzZXJ2YWJsZTxCcmFuY2g+O1xyXG4gICAgcHJpdmF0ZSBvYnNlcnZlcjpPYnNlcnZlcjxCcmFuY2g+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwKXtcclxuICAgICAgICB0aGlzLmN1cnJlbnRCcmFuY2ggPSBuZXcgT2JzZXJ2YWJsZTxCcmFuY2g+KG9icyA9PiB0aGlzLm9ic2VydmVyID0gb2JzKS5zaGFyZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEN1cnJlbnRCcmFuY2goYnJhbmNoOkJyYW5jaCl7XHJcbiAgICAgICAgaWYodGhpcy5vYnNlcnZlciAhPT0gdW5kZWZpbmVkKSB0aGlzLm9ic2VydmVyLm5leHQoYnJhbmNoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRCcmFuY2hMaXN0KCk6T2JzZXJ2YWJsZTxCcmFuY2hbXT57XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXCIvYXBpL2JyYW5jaC9cIilcclxuICAgICAgICAgICAgICAgIC5tYXAocyA9PiBzLmpzb24oKSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnIuanNvbigpLmVycm9yKSk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
