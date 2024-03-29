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
                __metadata('design:paramtypes', [http_1.Http])
            ], BranchService);
            exports_1("BranchService", BranchService);
        }
    }
});
//# sourceMappingURL=branch.service.js.map