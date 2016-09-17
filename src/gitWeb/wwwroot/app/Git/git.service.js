System.register(["@angular/http", "@angular/core", "rxjs/Rx", 'rxjs/add/operator/map', 'rxjs/add/operator/catch'], function(exports_1, context_1) {
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
    var http_1, core_1, Rx_1;
    var GitService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            let GitService = class GitService {
                constructor(http) {
                    this.http = http;
                }
                getLog() {
                    return this.http
                        .get("api/git/log")
                        .map(d => d.text());
                }
                getBranches() {
                    return this.http
                        .get("/api/git/branch")
                        .map(b => b.json())
                        .catch((error) => Rx_1.Observable.throw(error.json().error || "Server error"));
                }
            };
            GitService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
            ], GitService);
            exports_1("GitService", GitService);
        }
    }
    var _a;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9HaXQvZ2l0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQUNJLFlBQW9CLElBQVU7b0JBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtnQkFFOUIsQ0FBQztnQkFFRCxNQUFNO29CQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTt5QkFDWCxHQUFHLENBQUMsYUFBYSxDQUFDO3lCQUNsQixHQUFHLENBQUMsQ0FBQyxJQUFZLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO2dCQUVELFdBQVc7b0JBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO3lCQUNYLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQzt5QkFDdEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7eUJBQ2xCLEtBQUssQ0FBQyxDQUFDLEtBQVUsS0FBSyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLElBQUksY0FBYyxDQUFDLENBQUMsQ0FBQztnQkFDdkYsQ0FBQztZQUNMLENBQUM7WUFsQkQ7Z0JBQUMsaUJBQVUsRUFBRTs7MEJBQUE7WUFDYixtQ0FpQkMsQ0FBQSIsImZpbGUiOiJhcHAvR2l0L2dpdC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZSwgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQge0JyYW5jaH0gZnJvbSBcIi4vTW9kZWwvQnJhbmNoXCI7XHJcblxyXG5cclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdpdFNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldExvZygpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLmdldChcImFwaS9naXQvbG9nXCIpXHJcbiAgICAgICAgICAgIC5tYXAoZCA9PiA8c3RyaW5nPmQudGV4dCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRCcmFuY2hlcygpIDogT2JzZXJ2YWJsZTxCcmFuY2hbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLmdldChcIi9hcGkvZ2l0L2JyYW5jaFwiKVxyXG4gICAgICAgICAgICAubWFwKGIgPT4gYi5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkuZXJyb3IgfHwgXCJTZXJ2ZXIgZXJyb3JcIikpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
