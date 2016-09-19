System.register(['@angular/core', '@angular/http', "rxjs/Rx", 'rxjs/add/operator/map', 'rxjs/add/operator/catch'], function(exports_1, context_1) {
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
    var core_1, http_1, Rx_1;
    var CommitSearchService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            let CommitSearchService = class CommitSearchService {
                constructor(http) {
                    this.http = http;
                }
                search(term) {
                    return this.http.get('/api/commit/' + term)
                        .map(d => d.json())
                        .catch((error) => Rx_1.Observable.throw(error.json().error || "Server error"));
                }
            };
            CommitSearchService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
            ], CommitSearchService);
            exports_1("CommitSearchService", CommitSearchService);
        }
    }
    var _a;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21taXQvY29tbWl0LXNlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFFSSxZQUFvQixJQUFVO29CQUFWLFNBQUksR0FBSixJQUFJLENBQU07Z0JBRTlCLENBQUM7Z0JBRUQsTUFBTSxDQUFDLElBQVk7b0JBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7eUJBQ3RDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO3lCQUNsQixLQUFLLENBQUMsQ0FBQyxLQUFVLEtBQUssZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxJQUFJLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZGLENBQUM7WUFDTCxDQUFDO1lBWkQ7Z0JBQUMsaUJBQVUsRUFBRTs7bUNBQUE7WUFDYixxREFXQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21taXQvY29tbWl0LXNlYXJjaC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtIdHRwfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5cclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuaW1wb3J0IHtDb21taXR9IGZyb20gXCIuLi9HaXQvTW9kZWwvQ29tbWl0XCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb21taXRTZWFyY2hTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBzZWFyY2godGVybTogc3RyaW5nKTogT2JzZXJ2YWJsZTxDb21taXRbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCcvYXBpL2NvbW1pdC8nICsgdGVybSlcclxuICAgICAgICAgICAgLm1hcChkID0+IGQuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8IFwiU2VydmVyIGVycm9yXCIpKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
