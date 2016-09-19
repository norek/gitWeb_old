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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21taXQvY29tbWl0LXNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTs7Z0JBRUksWUFBb0IsbUJBQXdDO29CQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO29CQUtwRCxnQkFBVyxHQUFHLElBQUksaUJBQU8sRUFBVSxDQUFDO2dCQUg1QyxDQUFDO2dCQUtELE1BQU0sQ0FBQyxJQUFZO29CQUNmLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoQyxDQUFDO2dCQUVELFVBQVUsQ0FBQyxNQUFjO2dCQUV6QixDQUFDO2dCQUVELFFBQVE7b0JBQ0osSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVzt5QkFDOUIsWUFBWSxDQUFDLEdBQUcsQ0FBQzt5QkFDakIsb0JBQW9CLEVBQUU7eUJBQ3RCLFNBQVMsQ0FBQyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsdUJBQVUsQ0FBQyxFQUFFLENBQVcsRUFBRSxDQUFDLENBQUM7eUJBQzdGLEtBQUssQ0FBQyxLQUFLO3dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ25CLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEVBQUUsQ0FBVyxFQUFFLENBQUMsQ0FBQztvQkFDdkMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztZQUNULENBQUM7WUFsQ0Q7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsU0FBUyxFQUFFLENBQUMsd0NBQXdDLENBQUM7b0JBQ3JELFdBQVcsRUFBRSw4QkFBOEI7b0JBQzNDLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO2lCQUNyQyxDQUFDOztxQ0FBQTtZQUVGLHlEQTJCQyxDQUFBIiwiZmlsZSI6ImFwcC9jb21taXQvY29tbWl0LXNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29tbWl0U2VhcmNoU2VydmljZX0gZnJvbSBcIi4vY29tbWl0LXNlYXJjaC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q29tbWl0fSBmcm9tIFwiLi4vR2l0L01vZGVsL0NvbW1pdFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gICAgICAgIGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSAgICAgICAgICAgZnJvbSAncnhqcy9TdWJqZWN0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiY29tbWl0LXNlYXJjaFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbJ2FwcC9TdHlsZXMvY29tbWl0LXNlYXJjaC5jb21wb25lbnQuY3NzJ10sXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2NvbW1pdC1zZWFyY2guY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgcHJvdmlkZXJzOiBbQ29tbWl0U2VhcmNoQ29tcG9uZW50XVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbW1pdFNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbW1pdFNlYXJjaFNlcnZpY2U6IENvbW1pdFNlYXJjaFNlcnZpY2UpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb21taXRzOiBPYnNlcnZhYmxlPENvbW1pdFtdPjtcclxuICAgIHByaXZhdGUgc2VhcmNoVGVybXMgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XHJcblxyXG4gICAgc2VhcmNoKHRlcm06IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2VhcmNoVGVybXMubmV4dCh0ZXJtKTtcclxuICAgIH1cclxuXHJcbiAgICBnb1RvRGV0YWlsKGNvbW1pdDogQ29tbWl0KTogdm9pZCB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jb21taXRzID0gdGhpcy5zZWFyY2hUZXJtc1xyXG4gICAgICAgIC5kZWJvdW5jZVRpbWUoMzAwKVxyXG4gICAgICAgIC5kaXN0aW5jdFVudGlsQ2hhbmdlZCgpXHJcbiAgICAgICAgLnN3aXRjaE1hcCh0ZXJtID0+IHRlcm0gPyB0aGlzLmNvbW1pdFNlYXJjaFNlcnZpY2Uuc2VhcmNoKHRlcm0pIDogT2JzZXJ2YWJsZS5vZjxDb21taXRbXT4oW10pKVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZjxDb21taXRbXT4oW10pO1xyXG4gICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
