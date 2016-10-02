System.register(["@angular/http", "@angular/core", "rxjs/Observable", "rxjs/add/operator/share", 'rxjs/add/operator/map', 'rxjs/add/operator/catch'], function(exports_1, context_1) {
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
    var BranchService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {}],
        execute: function() {
            let BranchService = class BranchService {
                constructor(http) {
                    this.http = http;
                    this.currentBranch = new Observable_1.Observable(observer => this.observer = observer).share();
                }
                setCurrentBranch(branch) {
                    if (this.observer !== undefined) {
                        this.observer.next(branch);
                        console.log('in service ' + branch.tipSha);
                    }
                }
                getBranchList() {
                    return this.http.get("/api/branch/")
                        .map(s => s.json())
                        .catch(err => Observable_1.Observable.throw(err.json().error));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9icmFuY2gvYnJhbmNoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXQTtnQkFLSSxZQUFvQixJQUFVO29CQUFWLFNBQUksR0FBSixJQUFJLENBQU07b0JBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSx1QkFBVSxDQUFTLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUM5RixDQUFDO2dCQUVELGdCQUFnQixDQUFDLE1BQWM7b0JBRTNCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQzt3QkFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDL0MsQ0FBQztnQkFDTCxDQUFDO2dCQUVELGFBQWE7b0JBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQzt5QkFDL0IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7eUJBQ2xCLEtBQUssQ0FBQyxHQUFHLElBQUksdUJBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzFELENBQUM7WUFDTCxDQUFDO1lBdkJEO2dCQUFDLGlCQUFVLEVBQUU7OzZCQUFBO1lBQ2IseUNBc0JDLENBQUEiLCJmaWxlIjoiYXBwL2JyYW5jaC9icmFuY2guc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtCcmFuY2h9IGZyb20gXCIuL2JyYW5jaFwiO1xyXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQge09ic2VydmVyfSBmcm9tIFwicnhqcy9PYnNlcnZlclwiO1xyXG5cclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3Ivc2hhcmVcIjtcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJyYW5jaFNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgb2JzZXJ2ZXI6IE9ic2VydmVyPEJyYW5jaD47XHJcbiAgICBjdXJyZW50QnJhbmNoOiBPYnNlcnZhYmxlPEJyYW5jaD47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50QnJhbmNoID0gbmV3IE9ic2VydmFibGU8QnJhbmNoPihvYnNlcnZlciA9PiB0aGlzLm9ic2VydmVyID0gb2JzZXJ2ZXIpLnNoYXJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q3VycmVudEJyYW5jaChicmFuY2g6IEJyYW5jaCkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5vYnNlcnZlciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIubmV4dChicmFuY2gpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaW4gc2VydmljZSAnICsgYnJhbmNoLnRpcFNoYSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEJyYW5jaExpc3QoKTogT2JzZXJ2YWJsZTxCcmFuY2hbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFwiL2FwaS9icmFuY2gvXCIpXHJcbiAgICAgICAgICAgIC5tYXAocyA9PiBzLmpzb24oKSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBPYnNlcnZhYmxlLnRocm93KGVyci5qc29uKCkuZXJyb3IpKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
