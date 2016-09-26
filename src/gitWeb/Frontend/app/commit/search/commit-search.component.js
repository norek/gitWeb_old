System.register(['@angular/core', "./commit-search.service", 'rxjs/Observable', 'rxjs/Subject'], function(exports_1, context_1) {
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
    var core_1, commit_search_service_1, Observable_1, Subject_1;
    var CommitSearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (commit_search_service_1_1) {
                commit_search_service_1 = commit_search_service_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            }],
        execute: function() {
            let CommitSearchComponent_1;
            let CommitSearchComponent = CommitSearchComponent_1 = class CommitSearchComponent {
                constructor(commitSearchService) {
                    this.commitSearchService = commitSearchService;
                    this.searchTerms = new Subject_1.Subject();
                }
                search(term) {
                    this.searchTerms.next(term);
                }
                goToDetail(commit) {
                }
                ngOnInit() {
                    this.commits = this.searchTerms
                        .debounceTime(300)
                        .distinctUntilChanged()
                        .switchMap(term => term ? this.commitSearchService.search(term) : Observable_1.Observable.of([]))
                        .catch(error => {
                        console.log(error);
                        return Observable_1.Observable.of([]);
                    });
                }
            };
            CommitSearchComponent = CommitSearchComponent_1 = __decorate([
                core_1.Component({
                    selector: "commit-search",
                    styleUrls: ['app/Styles/commit-search.component.css'],
                    templateUrl: 'commit-search.component.html',
                    providers: [CommitSearchComponent]
                }), 
                __metadata('design:paramtypes', [commit_search_service_1.CommitSearchService])
            ], CommitSearchComponent);
            exports_1("CommitSearchComponent", CommitSearchComponent);
        }
    }
});
//# sourceMappingURL=commit-search.component.js.map