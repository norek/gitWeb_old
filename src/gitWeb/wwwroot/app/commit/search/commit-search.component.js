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
                __metadata('design:paramtypes', [(typeof (_a = typeof commit_search_service_1.CommitSearchService !== 'undefined' && commit_search_service_1.CommitSearchService) === 'function' && _a) || Object])
            ], CommitSearchComponent);
            exports_1("CommitSearchComponent", CommitSearchComponent);
        }
    }
    var _a;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21taXQvc2VhcmNoL2NvbW1pdC1zZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBYUE7O2dCQUVJLFlBQW9CLG1CQUF3QztvQkFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtvQkFLcEQsZ0JBQVcsR0FBRyxJQUFJLGlCQUFPLEVBQVUsQ0FBQztnQkFINUMsQ0FBQztnQkFLRCxNQUFNLENBQUMsSUFBWTtvQkFDZixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDaEMsQ0FBQztnQkFFRCxVQUFVLENBQUMsTUFBYztnQkFFekIsQ0FBQztnQkFFRCxRQUFRO29CQUNKLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVc7eUJBQzlCLFlBQVksQ0FBQyxHQUFHLENBQUM7eUJBQ2pCLG9CQUFvQixFQUFFO3lCQUN0QixTQUFTLENBQUMsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLHVCQUFVLENBQUMsRUFBRSxDQUFXLEVBQUUsQ0FBQyxDQUFDO3lCQUM3RixLQUFLLENBQUMsS0FBSzt3QkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNuQixNQUFNLENBQUMsdUJBQVUsQ0FBQyxFQUFFLENBQVcsRUFBRSxDQUFDLENBQUM7b0JBQ3ZDLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7WUFDVCxDQUFDO1lBbENEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFNBQVMsRUFBRSxDQUFDLHdDQUF3QyxDQUFDO29CQUNyRCxXQUFXLEVBQUUsOEJBQThCO29CQUMzQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztpQkFDckMsQ0FBQzs7cUNBQUE7WUFFRix5REEyQkMsQ0FBQSIsImZpbGUiOiJhcHAvY29tbWl0L3NlYXJjaC9jb21taXQtc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb21taXRTZWFyY2hTZXJ2aWNlfSBmcm9tIFwiLi9jb21taXQtc2VhcmNoLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtDb21taXR9IGZyb20gXCIuLi8uLi9HaXQvTW9kZWwvQ29tbWl0XCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSAgICAgICAgZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9ICAgICAgICAgICBmcm9tICdyeGpzL1N1YmplY3QnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJjb21taXQtc2VhcmNoXCIsXHJcbiAgICBzdHlsZVVybHM6IFsnYXBwL1N0eWxlcy9jb21taXQtc2VhcmNoLmNvbXBvbmVudC5jc3MnXSxcclxuICAgIHRlbXBsYXRlVXJsOiAnY29tbWl0LXNlYXJjaC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBwcm92aWRlcnM6IFtDb21taXRTZWFyY2hDb21wb25lbnRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29tbWl0U2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tbWl0U2VhcmNoU2VydmljZTogQ29tbWl0U2VhcmNoU2VydmljZSkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbW1pdHM6IE9ic2VydmFibGU8Q29tbWl0W10+O1xyXG4gICAgcHJpdmF0ZSBzZWFyY2hUZXJtcyA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcclxuXHJcbiAgICBzZWFyY2godGVybTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hUZXJtcy5uZXh0KHRlcm0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdvVG9EZXRhaWwoY29tbWl0OiBDb21taXQpOiB2b2lkIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNvbW1pdHMgPSB0aGlzLnNlYXJjaFRlcm1zXHJcbiAgICAgICAgLmRlYm91bmNlVGltZSgzMDApXHJcbiAgICAgICAgLmRpc3RpbmN0VW50aWxDaGFuZ2VkKClcclxuICAgICAgICAuc3dpdGNoTWFwKHRlcm0gPT4gdGVybSA/IHRoaXMuY29tbWl0U2VhcmNoU2VydmljZS5zZWFyY2godGVybSkgOiBPYnNlcnZhYmxlLm9mPENvbW1pdFtdPihbXSkpXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLm9mPENvbW1pdFtdPihbXSk7XHJcbiAgICAgICAgICAgIH0pOyBcclxuICAgICAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
