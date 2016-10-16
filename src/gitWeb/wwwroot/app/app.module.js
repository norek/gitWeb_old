System.register(["@angular/core", "@angular/platform-browser", "@angular/http", "./commit/detail/commit-detail.component", "./app.component", "./commit/commit.component", "./commit/commit.service", "./commit/search/commit-search.component", "./commit/search/commit-search.service", "./branch/branch.service", "./branch/branch.component", "./tag/tag.component", './repository/repository.service', './shared/loader.service', './changes/changes.service', './changes/change-detail.component', './rxjs-extensions'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, http_1, commit_detail_component_1, app_component_1, commit_component_1, commit_service_1, commit_search_component_1, commit_search_service_1, branch_service_1, branch_component_1, tag_component_1, repository_service_1, loader_service_1, changes_service_1, change_detail_component_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (commit_detail_component_1_1) {
                commit_detail_component_1 = commit_detail_component_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (commit_component_1_1) {
                commit_component_1 = commit_component_1_1;
            },
            function (commit_service_1_1) {
                commit_service_1 = commit_service_1_1;
            },
            function (commit_search_component_1_1) {
                commit_search_component_1 = commit_search_component_1_1;
            },
            function (commit_search_service_1_1) {
                commit_search_service_1 = commit_search_service_1_1;
            },
            function (branch_service_1_1) {
                branch_service_1 = branch_service_1_1;
            },
            function (branch_component_1_1) {
                branch_component_1 = branch_component_1_1;
            },
            function (tag_component_1_1) {
                tag_component_1 = tag_component_1_1;
            },
            function (repository_service_1_1) {
                repository_service_1 = repository_service_1_1;
            },
            function (loader_service_1_1) {
                loader_service_1 = loader_service_1_1;
            },
            function (changes_service_1_1) {
                changes_service_1 = changes_service_1_1;
            },
            function (change_detail_component_1_1) {
                change_detail_component_1 = change_detail_component_1_1;
            },
            function (_1) {}],
        execute: function() {
            let AppModule = class AppModule {
            };
            AppModule = __decorate([
                core_1.NgModule({
                    declarations: [
                        app_component_1.AppComponent,
                        commit_detail_component_1.CommitDetailComponent,
                        commit_component_1.CommitComponent,
                        commit_search_component_1.CommitSearchComponent,
                        branch_component_1.BranchComponent,
                        tag_component_1.TagComponent,
                        change_detail_component_1.ChangeDetailComponent
                    ],
                    imports: [
                        platform_browser_1.BrowserModule,
                        http_1.HttpModule
                    ],
                    providers: [commit_service_1.CommitService, commit_search_service_1.CommitSearchService, branch_service_1.BranchService, repository_service_1.RepositoryService, loader_service_1.LoaderService, changes_service_1.ChangeService],
                    bootstrap: [app_component_1.AppComponent]
                }), 
                __metadata('design:paramtypes', [])
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW9DQTtZQUF5QixDQUFDO1lBakIxQjtnQkFBQyxlQUFRLENBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNWLDRCQUFZO3dCQUNaLCtDQUFxQjt3QkFDckIsa0NBQWU7d0JBQ2YsK0NBQXFCO3dCQUNyQixrQ0FBZTt3QkFDZiw0QkFBWTt3QkFDWiwrQ0FBcUI7cUJBQ3hCO29CQUNELE9BQU8sRUFBRTt3QkFDTCxnQ0FBYTt3QkFDYixpQkFBVTtxQkFDYjtvQkFDRCxTQUFTLEVBQUUsQ0FBQyw4QkFBYSxFQUFFLDJDQUFtQixFQUFFLDhCQUFhLEVBQUMsc0NBQWlCLEVBQUMsOEJBQWEsRUFBQywrQkFBYSxDQUFDO29CQUM1RyxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO2lCQUM1QixDQUFDOzt5QkFBQTtZQUNGLGlDQUEwQixDQUFBIiwiZmlsZSI6ImFwcC9hcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gICAgICAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQge0h0dHBNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7Q29tbWl0RGV0YWlsQ29tcG9uZW50fSBmcm9tIFwiLi9jb21taXQvZGV0YWlsL2NvbW1pdC1kZXRhaWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Q29tbWl0Q29tcG9uZW50fSBmcm9tIFwiLi9jb21taXQvY29tbWl0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0NvbW1pdFNlcnZpY2V9IGZyb20gXCIuL2NvbW1pdC9jb21taXQuc2VydmljZVwiO1xyXG5pbXBvcnQge0NvbW1pdFNlYXJjaENvbXBvbmVudH0gZnJvbSBcIi4vY29tbWl0L3NlYXJjaC9jb21taXQtc2VhcmNoLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0NvbW1pdFNlYXJjaFNlcnZpY2V9IGZyb20gXCIuL2NvbW1pdC9zZWFyY2gvY29tbWl0LXNlYXJjaC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7QnJhbmNoU2VydmljZX0gZnJvbSBcIi4vYnJhbmNoL2JyYW5jaC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7QnJhbmNoQ29tcG9uZW50fSBmcm9tIFwiLi9icmFuY2gvYnJhbmNoLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1RhZ0NvbXBvbmVudH0gZnJvbSBcIi4vdGFnL3RhZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtSZXBvc2l0b3J5U2VydmljZX0gZnJvbSAnLi9yZXBvc2l0b3J5L3JlcG9zaXRvcnkuc2VydmljZSc7XHJcbmltcG9ydCB7TG9hZGVyU2VydmljZX0gZnJvbSAnLi9zaGFyZWQvbG9hZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQge0NoYW5nZVNlcnZpY2V9IGZyb20gJy4vY2hhbmdlcy9jaGFuZ2VzLnNlcnZpY2UnO1xyXG5pbXBvcnQge0NoYW5nZURldGFpbENvbXBvbmVudH0gZnJvbSAnLi9jaGFuZ2VzL2NoYW5nZS1kZXRhaWwuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCAnLi9yeGpzLWV4dGVuc2lvbnMnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudCxcclxuICAgICAgICBDb21taXREZXRhaWxDb21wb25lbnQsXHJcbiAgICAgICAgQ29tbWl0Q29tcG9uZW50LFxyXG4gICAgICAgIENvbW1pdFNlYXJjaENvbXBvbmVudCxcclxuICAgICAgICBCcmFuY2hDb21wb25lbnQsXHJcbiAgICAgICAgVGFnQ29tcG9uZW50LFxyXG4gICAgICAgIENoYW5nZURldGFpbENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgICAgIEh0dHBNb2R1bGVcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtDb21taXRTZXJ2aWNlLCBDb21taXRTZWFyY2hTZXJ2aWNlLCBCcmFuY2hTZXJ2aWNlLFJlcG9zaXRvcnlTZXJ2aWNlLExvYWRlclNlcnZpY2UsQ2hhbmdlU2VydmljZV0sXHJcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
