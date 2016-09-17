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
                __metadata('design:paramtypes', [http_1.Http])
            ], GitService);
            exports_1("GitService", GitService);
        }
    }
});
//# sourceMappingURL=git.service.js.map