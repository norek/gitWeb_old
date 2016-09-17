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
    var Branch, GitService;
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
            class Branch {
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9Ib21lL2dpdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtZQUFhLENBQUM7WUFHZDtnQkFDSSxZQUFvQixJQUFVO29CQUFWLFNBQUksR0FBSixJQUFJLENBQU07Z0JBRTlCLENBQUM7Z0JBRUQsTUFBTTtvQkFDRixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7eUJBQ1gsR0FBRyxDQUFDLGFBQWEsQ0FBQzt5QkFDbEIsR0FBRyxDQUFDLENBQUMsSUFBWSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFFRCxXQUFXO29CQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTt5QkFDWCxHQUFHLENBQUMsaUJBQWlCLENBQUM7eUJBQ3RCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO3lCQUNsQixLQUFLLENBQUMsQ0FBQyxLQUFVLEtBQUssZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxJQUFJLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZGLENBQUM7WUFDTCxDQUFDO1lBbEJEO2dCQUFDLGlCQUFVLEVBQUU7OzBCQUFBO1lBQ2IsbUNBaUJDLENBQUEiLCJmaWxlIjoiYXBwL0hvbWUvZ2l0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlLCB9IGZyb20gXCJyeGpzL1J4XCI7XHJcblxyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5cclxuY2xhc3MgQnJhbmNoe31cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdpdFNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldExvZygpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLmdldChcImFwaS9naXQvbG9nXCIpXHJcbiAgICAgICAgICAgIC5tYXAoZCA9PiA8c3RyaW5nPmQudGV4dCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRCcmFuY2hlcygpIDogT2JzZXJ2YWJsZTxCcmFuY2hbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLmdldChcIi9hcGkvZ2l0L2JyYW5jaFwiKVxyXG4gICAgICAgICAgICAubWFwKGIgPT4gYi5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkuZXJyb3IgfHwgXCJTZXJ2ZXIgZXJyb3JcIikpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
